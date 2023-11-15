'use strict'

function onBallClick(){
  const elBall = document.querySelector('.ball')
  elBall.innerText = +elBall.innerText +50
  elBall.style.width =  elBall.innerText+'px'
  elBall.style.height  =  elBall.innerText+'px'
}