let now = new Date();

const PI = Math.PI;
const FULL_CIRCLE = 2 * PI;

document.addEventListener('DOMContentLoaded', function() {
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  let drawClock = function() {
    let currentHour = now.getHours() % 12;
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();
    let hourHandRadians = function() {
      return (
        FULL_CIRCLE *
        ((currentHour % 12) / 12 +
        currentMinute / (60 * 12) + //Nudge the hour hand to match real clocks
          currentSecond / (60 * 60 * 12))
      );
    };
    let minuteHandRadians = function() {
      return FULL_CIRCLE * (currentMinute / 60 + currentSecond / (60 * 60));
    };
    let secondHandRadians = function() {
      return FULL_CIRCLE * (currentSecond / 60);
    };

    hourHand.style.transform = `rotate(${hourHandRadians(now)}rad)`;
    minuteHand.style.transform = `rotate(${minuteHandRadians(now)}rad)`;
    secondHand.style.transform = `rotate(${secondHandRadians(now)}rad)`;
  };

  drawClock();

  setInterval(function() {
    now = new Date();
    drawClock();
  }, 1000);
});
