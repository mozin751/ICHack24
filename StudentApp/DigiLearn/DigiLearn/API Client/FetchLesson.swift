//
//  FetchLesson.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import Foundation

func fetchLesson(title: String) -> Lesson? {
  print("WOOOOOfdskjfasO")
  var requestString = IP + "/get_lesson/?title=" + title
  
  let url = URL(string: requestString)!
  let request = URLRequest(url: url)
  var output = 0
  var lessonContent = ""
  var lesson: Lesson = Lesson(title: "", body: "")
  
  let sem = DispatchSemaphore.init(value: 0)
  
  let task = URLSession.shared.dataTask(with: request) { data, response, error in
    defer { sem.signal() }
    
    if let data = data {
      lesson = try! JSONDecoder().decode(Lesson.self, from: data)
    } else if let error = error {
      print("HTTP Request Failed \(error)")
    }
  }
  
  task.resume()
  
  sem.wait()
  return lesson
}
