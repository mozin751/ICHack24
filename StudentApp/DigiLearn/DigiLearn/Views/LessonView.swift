//
//  SwiftUIView.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 04/02/24.
//

import Foundation
import SwiftUI

struct LessonView: View {
  var title: String
  @State var text: String
  
    var body: some View {
      GeometryReader { geometry in
        ZStack {
          Image("BackgroundList")
            .resizable()
            .aspectRatio(geometry.size, contentMode: .fill)
            .edgesIgnoringSafeArea(.all)
            .onAppear {
              selectedText = text
            }
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
                      NavigationLink(destination: TopicsView(topics: allLessons)) {
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
                    
                    Button(action: {}) {
                      NavigationLink(destination: BuddyView(title: title, text: text)) {
                        Text("Call Buddy")
                          .font(.custom("Poppins-Bold", size: 14))
                          .foregroundColor(.white)
                          .padding()
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

struct UITextViewRepresentable: UIViewRepresentable {
    let textView = UITextView()
    @Binding var text: String
    
    func makeUIView(context: Context) -> UITextView {
        textView.delegate = context.coordinator
      textView.isEditable = false
        return textView
    }
    
    func updateUIView(_ uiView: UITextView, context: Context) {
        // SwiftUI -> UIKit
        uiView.text = text
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator(text: $text)
    }
    
    class Coordinator: NSObject, UITextViewDelegate {
        @Binding var text: String
        
        init(text: Binding<String>) {
            self._text = text
        }
        
        func textViewDidChange(_ textView: UITextView) {
            // UIKit -> SwiftUI
            _text.wrappedValue = textView.text
        }
        
        func textViewDidChangeSelection(_ textView: UITextView) {
            // Fires off every time the user changes the selection.
          let range = textView.selectedRange
          selectedText = String(text[range])
        }
    }
}
