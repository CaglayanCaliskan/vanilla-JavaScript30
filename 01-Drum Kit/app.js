const btnA = document.getElementById('a');
const btnS = document.getElementById('s');
const btnD = document.getElementById('d');
const btnF = document.getElementById('f');
const btnG = document.getElementById('g');
const btnH = document.getElementById('h');
const btnJ = document.getElementById('j');
const btnK = document.getElementById('k');
const btnL = document.getElementById('l');

function fire(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if (!key) {
    return;
  }
  key.classList.toggle('playing');
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    key.classList.toggle('playing');
  }, 100);
}

window.addEventListener('keydown', fire);
