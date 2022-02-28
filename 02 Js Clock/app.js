setInterval(setClock, 1000);
function setClock() {
  const currentDate = new Date();
  const secondsTime = currentDate.getSeconds() / 60;
  const minutesTime = (secondsTime + currentDate.getMinutes()) / 60;
  const hoursTime = (minutesTime + currentDate.getHours()) / 12;

  console.log(hoursTime, minutesTime, secondsTime);
  setRotation(secondHand, secondsTime);
  setRotation(minuteHand, minutesTime);
  setRotation(hourHand, hoursTime);
}

const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setRotation(element, time) {
  element.style.setProperty('--rotation', time * 360);
}
