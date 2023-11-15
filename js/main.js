'use strict'

function onBallClick(maxDiameter) {
  const elBall = document.querySelector('.ball')
  elBall.innerText = +elBall.innerText + getRandomInt(20,61)
  if (+elBall.innerText > maxDiameter) elBall.innerText = 100
  elBall.style.width = elBall.innerText + 'px'
  elBall.style.height = elBall.innerText + 'px'
  elBall.style.backgroundColor = getRandomColor()
}