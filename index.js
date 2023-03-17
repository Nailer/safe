var movingText = document.getElementById("moving-text");

function toggleAnimation() {
  if (movingText.style.animationPlayState === "paused") {
    movingText.style.animationPlayState = "running";
  } else {
    movingText.style.animationPlayState = "paused";
  }
}

