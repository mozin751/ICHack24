import Foundation
import SwiftUI

struct SuperTextField: View {
  
  var placeholder: Text
  @Binding var text: String
  var editingChanged: (Bool)->() = { _ in }
  var commit: ()->() = { }
  @State var showErrorMessage = false
  var body: some View {
    ZStack(alignment: .leading) {
      if text.isEmpty { placeholder }
      TextField("", text: $text, onEditingChanged: editingChanged, onCommit: commit)
        .multilineTextAlignment(.center)
    }
  }
}
