//
//  TopicsView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import SwiftUI

struct TopicsView: View {
  var topics: [String]? = ["Teaching Scratch to ages 6-8","Floating Point Numbers","Dylan"]
  var body: some View {
    if topics == nil {
      ProgressView()
        .progressViewStyle(CircularProgressViewStyle(tint: .blue))
        .scaleEffect(2)
    } else {
      NavigationView {
        GeometryReader { geometry in
          ZStack {
            Image("BackgroundList")
              .resizable()
              .aspectRatio(geometry.size, contentMode: .fill)
              .edgesIgnoringSafeArea(.all)
            VStack {
              Text("TOPICS")
                .foregroundColor(Color(red: 3 / 255, green: 57 / 255, blue: 103 / 255))
                .font(.custom("Poppins-Bold", size: 27))
                .multilineTextAlignment(.leading)
                .padding(.bottom, 40 / dev.height * geometry.size.height)
                .padding(.top, 20 / dev.height * geometry.size.height)
              
              ScrollViewReader { proxy in
                ScrollView(.vertical, showsIndicators: false) {
                  VStack {
                    ForEach(topics!, id: \.self) { topic in
                      Button(action:{}) {
                        NavigationLink(destination: LoadLessonView(title: topic)) {
                          Text(topic)
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
                    }
                  }
                  .padding(.horizontal)
                }
                .coordinateSpace(name: "scroll")
                .frame(width: 342 / dev.width * geometry.size.width, height: 600 / dev.height * geometry.size.height)
              }
            }
            //          VStack {
            //            Button(action:{}) {
            //              NavigationLink(destination: EmptyView()) {
            //                Text("Onboarding")
            //                  .font(.custom("Poppins-Bold", size: 22))
            //                  .foregroundColor(.white)
            //                  .frame(width: 250, height: 100)
            //              }
            //              .foregroundColor(Color.white)
            //              .background(Color(hue: 0.751, saturation: 0.366, brightness: 0.776, opacity: 0.243))
            //              .cornerRadius(28.5)
            //              .shadow(color: darkBlue.opacity(0.7), radius: 20, x: 0, y: 15)
            //
            //            }
            //            .padding(.bottom)
            //          }
          }
          .background(lightBlueBackground)
          .navigationBarHidden(true)
          .onAppear {
            geometry2.height = geometry.size.height
            geometry2.width = geometry.size.width
          }
          
        }
        .edgesIgnoringSafeArea(.all)
      }
      .navigationBarBackButtonHidden(true)
    }
  }
}
