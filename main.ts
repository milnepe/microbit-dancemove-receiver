radio.onReceivedString(function (receivedString) {
    ledFlag = true
    serial.writeLine(receivedString)
    ledFlag = false
})
let ledFlag = false
radio.setGroup(1)
ledFlag = false
basic.forever(function () {
    if (ledFlag) {
        led.plotBrightness(0, 0, 255)
        basic.pause(200)
        led.plotBrightness(0, 0, 0)
        basic.pause(200)
    }
})
