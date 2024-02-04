//
//  NameView.swift
//  DigiLearn
//

import SwiftUI
//var sY = (geometry.size.height - 500 * k2) / 2

struct NameView: View {
  
  @AppStorage("userName")
  var userName: String = ""
  @State var currName: String = ""
  var helper: Float = 0.0
  
  var body: some View {
    NavigationView {
      GeometryReader{ geometry in
        VStack {
          Text("Please enter your name")
            .font(.custom("Poppins-Bold", size: 16))
            .foregroundColor(darkBlue)
            .padding(.bottom, (464 - 423) / dev.height * geometry.size.height)
            .frame(width: 249 / dev.width * geometry.size.width)
            .multilineTextAlignment(.center)
          
          
          SuperTextField(
            placeholder: Text("")
              .foregroundColor(Color(red: 3 / 255, green: 57 / 255, blue: 103 / 255)),
            text: $currName
          )
          .font(.custom("Poppins-Medium", size: 14))
          .border(lightBlueBackground)
          .opacity(2)
          .frame(maxWidth: 150 / dev.width * geometry.size.width, maxHeight: 60 / dev.height * geometry.size.height)
          .background(lightBlueBackground)
          .cornerRadius(28.5)
          .shadow(color: greyBlue.opacity(0.7), radius: 20, x: 0, y: 15)
          .shadow(color: .white.opacity(0.6), radius: 5, x: 0, y: -15)
          .foregroundColor(darkBlue)
          .padding(.bottom, (496 - 468) / dev.height * geometry.size.height)
          
          if (currName != "") {
            Button(action: {
              print("Check")
            }) {
              NavigationLink(destination: CheckView(name: currName).onAppear {
              }) {
                Text("next")
                  .tracking(3)
                  .font(.custom("Poppins-Bold", size: 14))
                  .foregroundColor(.white)
                  .frame(width: 139 / dev.width * geometry.size.width, height: 40 / dev.height * geometry.size.height)
              }
              .navigationViewStyle(StackNavigationViewStyle())
              .foregroundColor(.white)
              .frame(width: 139 / dev.width * geometry.size.width, height: 32 / dev.height * geometry.size.height)
              .background(
                LinearGradient(gradient: Gradient(colors: [neonBlue2, neonBlue1]), startPoint: .leading, endPoint: .trailing)
              )
              .cornerRadius(28.5)
              .shadow(color: neonBlue2.opacity(0.7), radius: 10, x: 0, y: 15)
            }
          }
          else {
            Button(action: {}) {
              NavigationLink(destination: ContentView().onAppear {
                //                            UserDefaults.standard.set(currName, forKey: "userCode")
                //                            defaultDataSet(skipName: currName)
              }) {
                
                Text("next")
                  .tracking(3)
                  .font(.custom("Poppins-Bold", size: 14))
                  .foregroundColor(.white)
                  .frame(width: 139 / dev.width * geometry.size.width, height: 40 / dev.height * geometry.size.height)
              }
              .navigationViewStyle(StackNavigationViewStyle())
              .foregroundColor(.white)
              .frame(width: 139 / dev.width * geometry.size.width, height: 40 / dev.height * geometry.size.height)
              .background(
                LinearGradient(gradient: Gradient(colors: [neonBlue2, neonBlue1]), startPoint: .leading, endPoint: .trailing)
                  .opacity(0.3)
              )
              .cornerRadius(28.5)
              .shadow(color: neonBlue2.opacity(0.7), radius: 10, x: 0, y: 15)
            }
            .disabled(!(currName != ""))
          }
        }
        .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity, alignment: .center)
        .background(lightBlueBackground)
      }
    }
  }
}
