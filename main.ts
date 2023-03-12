//codeByMoses
radio.onReceivedValue(function (M2, value) {
    basic.showNumber(value)
})
// setGroup
radio.setGroup(2428)
//reset
radio.onReceivedNumber(function (receivedNumber: number) {
    control.reset()
})