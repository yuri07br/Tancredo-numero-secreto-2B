window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()
recognition.addEventListener('result', onspeak)

function onspeak(e) {
    console.log(e.results[0][0].transcript)
}