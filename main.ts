input.onButtonPressed(Button.A, function () {
    PTKidsBITRobot.motorGo(40, 40)
    basic.pause(1000)
    PTKidsBITRobot.motorGo(-40, -40)
    basic.pause(1000)
    PTKidsBITRobot.motorStop()
})
input.onButtonPressed(Button.B, function () {
    PTKidsBITRobot.motorGo(-40, -40)
    basic.pause(1000)
    PTKidsBITRobot.motorGo(40, 40)
    basic.pause(1000)
    PTKidsBITRobot.motorStop()
})
PTKidsBITRobot.motorGo(50, 50)
basic.pause(3000)
PTKidsBITRobot.motorStop()
basic.forever(function () {
	
})
