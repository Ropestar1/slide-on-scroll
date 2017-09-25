$(function() {
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  }

  setInterval(setDate, 1000);
})
