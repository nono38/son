radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
radio.setGroup(1)
