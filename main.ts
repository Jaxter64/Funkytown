input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G G F G - D - D ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G C5 B G - - - - ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G F G - D - D ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G C5 B G - - - - ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C - C C E - E E ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G G - G - G - ", 500), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G F G - D - D ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G C5 B G - - - - ", 250), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
