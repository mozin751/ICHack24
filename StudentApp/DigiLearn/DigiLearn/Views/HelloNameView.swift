//
//  HomeView.swift
//  dotplot
//
//  Created by Muhammad Mohsin on 29/01/23.
//

import SwiftUI

struct HelloNameView: View {
  @State private var isActive = false
  @State var name: String
  @State var lessons:[String]? = nil
  @State private var gotLessons = false
  
  var body: some View {
    GeometryReader { geometry in
      ZStack {
        VStack {
          Text("Hello\n" + name)
            .foregroundColor(darkBlue)
            .font(.custom("Poppins-Bold", size: 50))
            .frame(width: 300 * dev.width / geometry.size.width, height: 500 * dev.height / geometry.size.height)
            .multilineTextAlignment(.center)
          
        }
      }
      .position(x: geometry.frame(in: .local).midX, y: geometry.frame(in: .local).midY)
      .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity, alignment: .center)
      .background(
        LinearGradient(gradient: Gradient(colors: [neonBlue2, neonBlue1]), startPoint: .top, endPoint: .bottom)
      )
      .onAppear {
        lessons = getLessons()
        allLessons = lessons
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
          isActive = true
        }
      }
      .navigationBarHidden(true)
      .background(
        NavigationLink(destination: TopicsView(topics: lessons), isActive: $isActive) {
        }
      )
    }
    .edgesIgnoringSafeArea(.all)
    .navigationBarBackButtonHidden(true)
  }
}
