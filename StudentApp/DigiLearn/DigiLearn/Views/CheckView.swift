//
//  CheckView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct CheckView: View {
  @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
  var name: String
  
    var body: some View {
      if authenticate(name: name) {
        HelloNameView(name: name)
      } else {
        NameView()
      }
    }
}

