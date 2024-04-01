let DISPLAY_SIZE = 16;
const DISPLAY_SIZE_LIMIT = 100;

const button = document.querySelector("#button");
const canvas = document.querySelector(".canvas");

canvas.addEventListener("mouseover", (e) => {
 if (e.buttons === 1 && e.target.classList.contains('pixel')){
    // Check if left mouse button is pressed
    setPixelColor(e.target);
  }
});
canvas.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains('pixel')) {
    setPixelColor(e.target);
  }
});

button.addEventListener("click", () => {
  let input = prompt("new canvas size");
  input = parseInt(input);
  if (!isNaN(input) && input <= DISPLAY_SIZE_LIMIT) {
    DISPLAY_SIZE = input;
    deleteCanvas();
    fillCanvas();
  }
});

let selected_color = "darkred";

function setPixelColor(div) {
  div.style.backgroundColor = selected_color;
}

function createPixel() {
  const pixel = document.createElement("div");
  pixel.classList.toggle("pixel");
  pixel.style.backgroundColor = "white";
  pixel.style.width = `${100 / DISPLAY_SIZE}%`;
  pixel.draggable = false; // Make the div non-draggable
  return pixel;
}

function fillCanvas() {
  for (let i = 0; i < DISPLAY_SIZE; i++) {
    for (let j = 0; j < DISPLAY_SIZE; j++) {
      canvas.appendChild(createPixel());
    }
  }
}

function deleteCanvas() {
  canvas.innerHTML = ""; // Clear canvas by removing all child nodes
}

fillCanvas();
