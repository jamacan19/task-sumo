basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) >= 30) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
