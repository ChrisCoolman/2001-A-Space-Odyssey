let starsX = [];
let starsY = [];
let starsZ = [];
let lastScrollY = window.scrollY;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawStars() {
  ctx.fillStyle = "rgb(255 255 255)";
  for(let i = 0; i < 500; i++) {
    let x = random(0, window.innerWidth);
    let y = random(0, window.innerHeight);
    starsX.push(x);
    starsY.push(y);
    starsZ.push(random(1, 16));
    ctx.fillRect(x, y, 2, 2);
  }
}

resizeCanvas();
drawStars();

addEventListener("scroll", (event) => { })

onscroll = (event) => {
  const currentScrollY = window.scrollY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < 500; i++) {
    ctx.fillStyle = "rgb(255 255 255)";
    if (currentScrollY > lastScrollY) {
      starsY[i] = starsY[i] - starsZ[i];
    }
    else {
      starsY[i] = starsY[i] + starsZ[i];
    }

    if (starsY[i] < 0) {
      starsY[i] = canvas.height;
    }

    if (starsY[i] > canvas.height) {
      starsY[i] = 0;
    }
    ctx.fillRect(starsX[i], starsY[i], 2, 2);
  }
  lastScrollY = currentScrollY;
}
