function ovecka () {
    music.setTempo(60)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
function koleda2 () {
    music.setTempo(60)
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
}
input.onButtonPressed(Button.A, function () {
    vybrana_pisnicka = Math.constrain(vybrana_pisnicka - 1, 0, 1)
    ukaz_pisnicku(vybrana_pisnicka)
})
function ovecka2 () {
    music.setTempo(60)
    tonC()
    music.rest(music.beat(BeatFraction.Eighth))
    tonD()
    music.rest(music.beat(BeatFraction.Eighth))
    tonE()
    music.rest(music.beat(BeatFraction.Quarter))
    tonF()
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
function koleda () {
    music.setTempo(60)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function ukaz_pisnicku (pisnicka: number) {
    if (pisnicka == 0) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . # # # .
            . # # # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
}
function tonE () {
    strip.clear()
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    strip.show()
}
function tonC () {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    strip.show()
}
input.onButtonPressed(Button.AB, function () {
    prehravej = 1
    zahrej_pinicku(vybrana_pisnicka)
    prehravej = 0
    ukaz_pisnicku(vybrana_pisnicka)
})
function tonD () {
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    strip.show()
}
input.onButtonPressed(Button.B, function () {
    vybrana_pisnicka = Math.constrain(vybrana_pisnicka + 1, 0, 1)
    ukaz_pisnicku(vybrana_pisnicka)
})
function tonF () {
    strip.clear()
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    strip.show()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
function zahrej_pinicku (pisnicka: number) {
    if (pisnicka == 0) {
        ovecka()
    } else {
        koleda()
    }
}
let prehravej = 0
let vybrana_pisnicka = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.show()
music.setVolume(130)
vybrana_pisnicka = 0
prehravej = 0
ukaz_pisnicku(vybrana_pisnicka)
loops.everyInterval(500, function () {
    if (prehravej == 1) {
        if (vybrana_pisnicka == 0) {
            basic.showLeds(`
                . . . # #
                . . . # #
                . # # # .
                . # # # .
                . # . # .
                `)
            basic.showLeds(`
                . . . # #
                . . . # #
                . # # # .
                . # # # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
    }
})
