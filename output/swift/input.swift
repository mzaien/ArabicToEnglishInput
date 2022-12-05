import SwiftUI
import JavaScriptCore

final class UpdateTracker: ObservableObject {
  @Published var value = 0;

  func update() {
    value += 1
  }
}

struct MyComponent: View {
  @ObservedObject var updateTracker = UpdateTracker()
  private var jsContext = JSContext()

  @State private var input1: String = ""

  func eval(code: String) -> JSValue! {
    return jsContext?.evaluateScript(code)
  }

  func setComputedState() {
    input1 = eval(code: "state.number").toString()!
  }

  init() {
    let jsSource = """
    const state = new Proxy(
      { number: "" },
      {
        set: (target, key, value) => {
          const returnVal = Reflect.set(target, key, value);
          update();
          return returnVal;
        },
      }
    );
    """
    jsContext?.exceptionHandler = { context, exception in
      print("JS Error: \(exception!)")
    }

    let updateRef = updateTracker.update
    let updateFn : @convention(block) () -> Void = { updateRef() }
    jsContext?.setObject(updateFn, forKeyedSubscript: "update" as NSString)

    jsContext?.evaluateScript(jsSource)
  }

  var body: some View {
    VStack {

      VStack() {Text("This input changes arabic numbers to english numbers!")}

      VStack() {}

      TextField("", text: $input1)

      }
      .onAppear {
        setComputedState()
      }

      }
    }