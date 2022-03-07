const barProgress = document.getElementById('bar-progress');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const backBtn = document.getElementById('btn-back');
const backUpd = document.getElementById('btn-update');
const playBtn = document.getElementById('btn-play');
const volumeScale = document.getElementById('btn-volume');
const muteBtn = document.getElementById('btn-sound');
const screenBtn = document.getElementById('btn-full');

//FUNCTİONS

//volume 0 0.50 1

function progressLoop() {
  progress.style.width =
    Math.floor((video.currentTime / video.duration) * 100) + '%';
}

function selectTime(e) {
  const selectTime = Math.floor((e.offsetX / barProgress.offsetWidth) * 100);
  progress.style.width = selectTime + '%';
  video.currentTime = (selectTime * video.duration) / 100;
}

function playAndPause() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = `<span class='material-icons'>pause</span>`;
  } else {
    video.pause();
    playBtn.innerHTML = `<span class='material-icons'> play_arrow </span>`;
  }
}
//video current time

function videoCurrentTime() {
  setInterval(() => {
    progressLoop();
    const currentSecond = Math.floor(video.currentTime % 60).toLocaleString(
      'en-US',
      {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }
    );
    const currentMinute = Math.floor(video.currentTime / 60);
    const minute = Math.floor(video.duration / 60);
    const second = Math.floor(video.duration - minute * 60);
    timer.innerText = `${currentMinute}:${currentSecond}/${minute}:${second}`;
  }, 800);
}

function volumeHandle() {
  video.volume = volumeScale.value / 100;
}
function muteHandle() {
  if (muteBtn.children[0].innerText == 'volume_up') {
    muteBtn.children[0].innerText = 'volume_off';
    video.volume = 0;
  } else {
    muteBtn.children[0].innerText = 'volume_up';
    video.volume = volumeScale.value / 100;
  }
}
function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else {
    video.msRequestFullscreen();
  }
}
function back15sec() {
  video.currentTime -= (video.duration / 100) * 3;
}
function upd15sec() {
  video.currentTime += (video.duration / 100) * 3;
}

//EVENTS
playBtn.addEventListener('click', playAndPause);
window.addEventListener('load', videoCurrentTime);
barProgress.addEventListener('mouseup', selectTime);
volumeScale.addEventListener('click', volumeHandle);
muteBtn.addEventListener('click', muteHandle);
screenBtn.addEventListener('click', fullScreen);
backBtn.addEventListener('click', back15sec);
backUpd.addEventListener('click', upd15sec);
