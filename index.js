var movingText = document.getElementById("moving-text");
// var audioButton = document.getElementsByClassName(".audio-description")
var audBut = document.getElementById("myAudio")

function toggleAnimation() {
  if (movingText.style.animationPlayState === "paused") {
    movingText.style.animationPlayState = "running";
  } else {
    movingText.style.animationPlayState = "paused";
  }
}


function playera() {
  audBut.play();
}

function pause() {
  audBut.pause();
}

// audioButton.addEventListener("click", function play() {
//   audBut.pause();
// })

// document.getElementById('play-description').addEventListener('click', function add () {
//   var audio = new Audio('./Recording.m4a');
//   audio.play() - 1
//   add--
// });