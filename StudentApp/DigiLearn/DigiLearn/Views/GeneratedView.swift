//
//  GeneratedView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct GeneratedView: View {
  var title: String
  @State var text: String
  var save_text: String
  
    var body: some View {
      GeometryReader { geometry in
        ZStack {
          Image("BackgroundList")
            .resizable()
            .aspectRatio(geometry.size, contentMode: .fill)
            .edgesIgnoringSafeArea(.all)
          VStack {
            VStack {
              Text(title)
                .font(.custom("Poppins-Bold", size: 20))
                .foregroundColor(Color.white)
                .padding(.bottom, 2 / dev.height * geometry2.height)
              
              ZStack (alignment: .top){
                VStack{
                }
                .frame(width: 346 / dev.width * geometry2.width, height: 624 / dev.height * geometry2.height)
                .background(darkBlue)
                .clipShape(RoundedRectangle(cornerRadius: 25.0))
                .shadow(color: Color.blue.opacity(0.4), radius: 8)
                
                VStack {
                  UITextViewRepresentable(text: $text)
                    .cornerRadius(25)
                    .frame(width: 330 / dev.width * geometry2.width, height: 488 / dev.height * geometry2.height)
                    .edgesIgnoringSafeArea(.all)
                  
                  HStack{
                    Button(action: {}) {
                      NavigationLink(destination: BuddyView(title: title, text: save_text)) {
                        Text("Back")
                          .font(.custom("Poppins-Bold", size: 14))
                          .foregroundColor(.white)
                          .frame(width: 139 / dev.width * geometry2.width, height: 40 / dev.height * geometry2.height)
                      }
                      .navigationViewStyle(StackNavigationViewStyle())
                      .foregroundColor(.white)
                      .frame(width: 139 / dev.width * geometry2.width, height: 40 / dev.height * geometry2.height)
                      .background(
                        LinearGradient(gradient: Gradient(colors: [neonBlue2, neonBlue1]), startPoint: .leading, endPoint: .trailing)
                      )
                      .cornerRadius(28.5)
                      .shadow(color: neonBlue2.opacity(0.7), radius: 10, x: 0, y: 15)
                    }
                  }
                }
                .offset(x:0, y: geometry2.height * 0.01)
              }
            }
          }
          .padding()
        }
      }
      .background(darkBlue)
      .navigationBarHidden(true)
      .edgesIgnoringSafeArea(.all)
      .navigationBarBackButtonHidden(true)
    }
}
