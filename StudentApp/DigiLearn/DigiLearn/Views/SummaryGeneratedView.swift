//
//  LoadGeneratedView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct SummaryGeneratedView: View {
  var title: String
  var save_text: String
  
    var body: some View {
      GeneratedView(title: title, text: summary(title), save_text: save_text)
    }
}

