input.onGesture(Gesture.TiltLeft, function () {
    Steps += 1
})
let Steps = 0
basic.forever(function () {
    basic.showNumber(Steps)
})
