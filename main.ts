led.enable(true)
basic.showNumber(1)
basic.showNumber(2)
basic.showNumber(3)
basic.showNumber(4)
basic.showNumber(5)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showString("Hello!")
    basic.showIcon(IconNames.Heart)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.NorthWest)
    basic.clearScreen()
    basic.pause(500)
})
