const timeText = document.getElementById('remaining-time');
//
const triggers = document.querySelectorAll('.box');

function handleTime(e) {
  let goalSeconds = Number(e.target.dataset.time);
  function editor() {
    timeText.innerText = goalSeconds;
    console.log(goalSeconds);
    goalSeconds--;
    if (goalSeconds < 0) {
      timeText.innerText = 'Time is Up 👌';
      clearInterval(myInterval);
    }
  }
  const myInterval = setInterval(editor, 1000);
}

triggers.forEach((trigger) => trigger.addEventListener('click', handleTime));
