var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    }
}

function speak() {
    var Synth = window.speechSynthesis;
    Speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(Speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        Take_Snapshot();
        save();
    }, 5000);
}
    
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById('camera');

function Take_Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}