//
//  Summarise.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import Foundation
import ChatGPTSwift

func explanation(_ title: String) -> String {
  let api = ChatGPTAPI(apiKey: "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")
  let sem = DispatchSemaphore.init(value: 0)
  
  Task {
      do {
          let response = try await api.sendMessage(text: "Give me more information about the follwing: " + selectedText,
                                                   model: "gpt-3.5-turbo",
                                                   systemText: "You are already talking about " + title)
          generatedText = response
          print(generatedText)
          sem.signal()
      } catch {
          print(error.localizedDescription)
      }
  }
  
  sem.wait()
  return generatedText!
}

func points(_ title: String) -> String {
  let api = ChatGPTAPI(apiKey: "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")
  let sem = DispatchSemaphore.init(value: 0)
  
  Task {
      do {
          let response = try await api.sendMessage(text: "Condense the following information into bullet points: " + selectedText,
                                                   model: "gpt-3.5-turbo",
                                                   systemText: "You are already talking about " + title)
          generatedText = response
          print(generatedText)
          sem.signal()
      } catch {
          print(error.localizedDescription)
      }
  }
  
  sem.wait()
  return generatedText!
}

func summary(_ title: String) -> String {
  let api = ChatGPTAPI(apiKey: "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")
  let sem = DispatchSemaphore.init(value: 0)
  
  Task {
      do {
          let response = try await api.sendMessage(text: "Read through the following text and summarize it in one or two sentences: " + selectedText,
                                                   model: "gpt-3.5-turbo",
                                                   systemText: "You are already talking about " + title)
          generatedText = response
          print(generatedText)
          sem.signal()
      } catch {
          print(error.localizedDescription)
      }
  }
  
  sem.wait()
  return generatedText!
}
