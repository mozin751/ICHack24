//
//  BuddyView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct BuddyView: View {
  var title: String
  var text: String
  
    var body: some View {
      GeometryReader { geometry in
        ZStack {
          Image("BackgroundList")
            .resizable()
            .aspectRatio(geometry.size, contentMode: .fill)
            .edgesIgnoringSafeArea(.all)
            .onAppear {
              generatedText = nil
            }
          VStack {
            Button(action:{}) {
              NavigationLink(destination: SummaryGeneratedView(title: title, save_text: text)) {
                Text("Create a summary")
                  .font(.custom("Poppins-Bold", size: 22))
                  .foregroundColor(.white)
                  .frame(width: 250, height: 100)
              }
              .foregroundColor(Color.white)
              .background(Color(hue: 0.751, saturation: 0.366, brightness: 0.776, opacity: 0.243))
              .cornerRadius(28.5)
              .shadow(color: darkBlue.opacity(0.7), radius: 20, x: 0, y: 15)
              
            }
            .padding(.bottom)
            Button(action:{}) {
              NavigationLink(destination: PointsGeneratedView(title: title, save_text: text)) {
                Text("Explain in bullet points")
                  .font(.custom("Poppins-Bold", size: 22))
                  .foregroundColor(.white)
                  .frame(width: 250, height: 100)
              }
              .foregroundColor(Color(red: 1.0, green: 0.0, blue: 0.0, opacity: 1.0))
              .background(Color(hue: 0.751, saturation: 0.366, brightness: 0.776, opacity: 0.243))
              .cornerRadius(28.5)
              .shadow(color: darkBlue.opacity(0.7), radius: 20, x: 0, y: 15)
            }
            .padding(.bottom)
            Button(action:{}) {
              NavigationLink(destination: ExplainGeneratedView(title: title, save_text: text)) {
                Text("Explain this in detail")
                  .font(.custom("Poppins-Bold", size: 22))
                  .foregroundColor(.white)
                  .frame(width: 250, height: 100)
              }
              .foregroundColor(Color(red: 1.0, green: 0.0, blue: 0.0, opacity: 1.0))
              .background(Color(hue: 0.751, saturation: 0.366, brightness: 0.776, opacity: 0.243))
              .cornerRadius(28.5)
              .shadow(color: darkBlue.opacity(0.7), radius: 20, x: 0, y: 15)
            }
            .padding(.bottom)
            
            Button(action:{}) {
              NavigationLink(destination: LessonView(title: title, text: text)) {
                Text("Return to lesson")
                  .font(.custom("Poppins-Bold", size: 22))
                  .foregroundColor(.white)
                  .frame(width: 250, height: 100)
              }
              .foregroundColor(Color(red: 1.0, green: 0.0, blue: 0.0, opacity: 1.0))
              .background(Color(hue: 0.751, saturation: 0.366, brightness: 0.776, opacity: 0.243))
              .cornerRadius(28.5)
              .shadow(color: darkBlue.opacity(0.7), radius: 20, x: 0, y: 15)
            }
          }
        }
        .background(lightBlueBackground)
        .navigationBarHidden(true)
      }
      .edgesIgnoringSafeArea(.all)
    }
}
