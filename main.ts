input.touchD0.onEvent(ButtonEvent.Click, function () {
    for (let index = 0; index < 3; index++) {
        pins.LED.digitalWrite(true)
        pause(300)
        pins.LED.digitalWrite(false)
        pause(300)
    }
})
pixel.setColor(0xff0000)
pause(500)
pixel.setColor(0xffffff)
pause(500)
pixel.setColor(0x0000ff)
pause(500)
pixel.setColor(0x000000)
forever(function () {
    pins.A1.analogWrite(1023)
    pause(1000)
    pins.A1.analogWrite(470)
    pause(2000)
    pins.A1.analogWrite(0)
    pause(2000)
})
