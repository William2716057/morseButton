$(document).ready(function () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator;

    function playTone() {
        oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4 note
        oscillator.connect(audioCtx.destination);
        oscillator.start();
    }

    function stopTone() {
        if (oscillator) {
            oscillator.stop();
            oscillator.disconnect();
        }
    }

    $(".button").mousedown(function () {
        playTone();
    });

    $(".button").mouseup(function () {
        stopTone();
    });

    $(".button").mouseleave(function () {
        stopTone();
    });
});