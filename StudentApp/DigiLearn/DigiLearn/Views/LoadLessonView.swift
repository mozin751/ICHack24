//
//  LessonView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct LoadLessonView: View {
  var title: String
  @State var lesson: Lesson?
  
    var body: some View {
      if let lesson = fetchLesson(title: title) {
        LessonView(title: title, text: lesson.body)
      }
    }
}

