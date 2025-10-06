let Value = 0
basic.forever(function () {
    Value = input.temperature()
    basic.showNumber(Value)
    if (Value > 27) {
        basic.showString("Hot")
    } else if (Value < 22) {
        basic.showString("Cold")
    } else {
        basic.showString("Warm")
    }
})
