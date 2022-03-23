const holes = document.querySelectorAll('.hole');
const score = document.querySelector('#score');
const diglets = document.querySelectorAll('.diglet');
const startBtn = document.querySelector('button');

let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function dig() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      dig();
    }
  }, time);
}

function startGame() {
  score.textContent = 0;
  timeUp = false;
  dig();

  setTimeout(() => {
    timeUp = true;
  }, 10000);
}
function scoreBoard(e) {
  if (!e.isTrusted) return;
  if (this.parentElement.className.match('up')) {
    this.classList.remove('up');
    score.textContent++;
  } else {
    return score.textContent--;
  }
}

startBtn.addEventListener('click', startGame);
diglets.forEach((diglet) => diglet.addEventListener('click', scoreBoard));
