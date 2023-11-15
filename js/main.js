'use strict'

function onBallClick() {
  const elBall = document.querySelector('.ball')
  elBall.innerText = +elBall.innerText + getRandomInt(20,61)
  if (+elBall.innerText > 400) elBall.innerText = 100
  elBall.style.width = elBall.innerText + 'px'
  elBall.style.height = elBall.innerText + 'px'
}