JavaScript
const text = document.getElementById('text');
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


html
<p id="text">This is some sample text</p>
<button id="increase">Increase font size</button>
<button id="decrease">Decrease font size</button>



css
#text {
  font-size: 16px;
}