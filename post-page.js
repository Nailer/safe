// element = document.querySelector(".products-voice")
function myFunction() {
    var element = document.getElementsByClassName("options-text");
    element.classList.toggle("toggle");
}

var audBut = document.getElementById("myAudio")
function playera() {
    audBut.play();
}

function pause() {
    audBut.pause();
}
// function toggles(){
//     document.getElementById('function').style.opacity = '1.0';
//  }

const text = document.getElementById('text');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// Increase font size by 2 pixels
increaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = `${fontSize + 2}px`;
});

// Decrease font size by 2 pixels
decreaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = `${fontSize - 2}px`;
});
// Increase font size by 2 pixels
increaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text1.style.fontSize = `${fontSize + 2}px`;
});

// Decrease font size by 2 pixels
decreaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text1.style.fontSize = `${fontSize - 2}px`;
});
// Increase font size by 2 pixels
increaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text2.style.fontSize = `${fontSize + 2}px`;
});

// Decrease font size by 2 pixels
decreaseBtn.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text2.style.fontSize = `${fontSize - 2}px`;
});
