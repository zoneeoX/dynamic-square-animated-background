const background = document.querySelector(".background");

const squareCount = 5;

function generateSquare() {
  const square = document.createElement("div");
  square.classList.add("square");

  square.style.width = `${1 + Math.random() * 2}em`; 
  square.style.height = `${1 + Math.random() * 2}em`; 
  square.style.animationDuration = `${15 + Math.random() * 5}s`; 
  square.style.animationDelay = `${Math.random() * 5}s`; 
  square.style.left = `${Math.random() * 100}vw`; 

  background.appendChild(square);

  square.addEventListener('animationend', () => {
    square.remove();
  });
}

for (let i = 0; i < squareCount; i++) {
  generateSquare();
}

setInterval(() => {
  generateSquare();
}, 2000); 
