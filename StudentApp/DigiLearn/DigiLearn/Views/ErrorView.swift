//
//  ErrorView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct ErrorView: View {
    var body: some View {
      GeometryReader { geometry in
        ZStack {
          Image("BackgroundList")
            .resizable()
            .aspectRatio(geometry.size, contentMode: .fill)
            .edgesIgnoringSafeArea(.all)
          VStack {
            Text("Authentication Failed")
              .foregroundColor(Color(red: 3 / 255, green: 57 / 255, blue: 103 / 255))
              .font(.custom("Poppins-Bold", size: 27))
              .multilineTextAlignment(.leading)
              .padding(.bottom, 40 / dev.height * geometry.size.height)
              .padding(.top, 20 / dev.height * geometry.size.height)
          }
      }
      .background(lightBlueBackground)
      .navigationBarHidden(false)}
      
    }
}

#Preview {
    ErrorView()
}
