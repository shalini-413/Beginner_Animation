// var audio = document.createElement('audio');
// audio.setAttribute('src', 'sound.wav'); 
// audio.loop=true;
// audio.play();

const btn = document.querySelector('.btn');
const sky = document.querySelector('.sky');
const trees = document.querySelector('.trees');
const track = document.querySelector('.track');
const bus = document.querySelector('.bus');
const wheels = document.querySelectorAll('.wheel1 img, .wheel2 img');

btn.addEventListener('click', () => {
  sky.style.animationPlayState = 'running';
  trees.style.animationPlayState = 'running';
  track.style.animationPlayState = 'running';
  bus.style.animationPlayState = 'running';
  wheels.forEach((wheel) => {
    wheel.style.animationPlayState = 'running';
  });

  btn.classList.add('clicked');
});

const button = document.querySelector('.btn');
const audio = new Audio('sounds.wav');

btn.addEventListener('click', () => {
  audio.play();
});


