//
//  DigiLearnApp.swift
//  DigiLearn
//
//  Created by Muhammad Mohsin on 03/02/24.
//

import SwiftUI

class DevSizes: ObservableObject {
  @Published var width = 390.0
  @Published var height = 844.0
}

class GeometrySize: ObservableObject {
  @Published var width: CGFloat = 0
  @Published var height: CGFloat = 0
}

var dev = DevSizes()
var geometry2 = GeometrySize()
var k1 = geometry2.width / dev.width
var k2 = geometry2.height / dev.height
var sX = (geometry2.width - 342 * k1) / 2

@main
struct DigiLearnApp: App {
    var body: some Scene {
        WindowGroup {
          NameView()
        }
    }
}
