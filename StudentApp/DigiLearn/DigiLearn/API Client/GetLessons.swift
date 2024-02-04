//
//  GetLessons.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import Foundation

struct AllLessons: Decodable {
  let Lessons: [String]
}

func getLessons() -> [String] {
  var requestString = IP + "/all_lessons/"
  
  let url = URL(string: requestString)!
  let request = URLRequest(url: url)
  var output = 0
  var lessons_list: [String] = []
  
  let sem = DispatchSemaphore.init(value: 0)
  
  let task = URLSession.shared.dataTask(with: request) { data, response, error in
    defer { sem.signal() }
    
    if let data = data {
      let lessons: AllLessons = try! JSONDecoder().decode(AllLessons.self, from: data)
      lessons_list = lessons.Lessons
    } else if let error = error {
      print("HTTP Request Failed \(error)")
    }
  }
  
  task.resume()
  
  sem.wait()
  return lessons_list
}
