const timeText = document.getElementById('remaining-time');
const clockScore = document.getElementById('current-time');
//
const triggers = document.querySelectorAll('.box');

let itsTheFinalCountDown = false;

//main function
function handleTime(e) {
  let goalSeconds = Number(e.target.dataset.time);

  if (itsTheFinalCountDown) return;
  itsTheFinalCountDown = true;

  function editor() {
    timeText.innerText = convertHMS(goalSeconds);
    goalSeconds--;

    if (goalSeconds < 0) {
      timeText.innerText = 'Time is Up 👌';
      clearInterval(myInterval);
      itsTheFinalCountDown = false;
    }
  }
  const myInterval = setInterval(editor, 1000);
}

// Clock on load
const clock = setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  clockScore.innerText = `${hour}:${minute}:${second}`;
}, 1000);

// sec to time
function convertHMS(value) {
  const sec = parseInt(value, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
}

triggers.forEach((trigger) => trigger.addEventListener('click', handleTime));
