//
//  Authenticate.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 03/02/24.
//

import Foundation

let IP = "http://146.169.140.182"

func authenticate(name: String) -> Bool {
  var requestString = IP + "/authenticate?name=" + name
  
  let url = URL(string: requestString)!
  let request = URLRequest(url: url)
  var output = 0
  
  let sem = DispatchSemaphore.init(value: 0)
  
  let task = URLSession.shared.dataTask(with: request) { data, response, error in
    defer { sem.signal() }
    
    if let data = data {
      print("auth: \(data)")
      output = data.withUnsafeBytes { $0.pointee }
      print(output)
    } else if let error = error {
      print("HTTP Request Failed \(error)")
    }
  }
  
  task.resume()
  
  sem.wait()
  return output == 49
}
