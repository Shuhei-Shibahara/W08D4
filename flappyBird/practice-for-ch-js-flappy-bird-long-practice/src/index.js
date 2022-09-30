import FlappyBird from './game';

const canvas = document.getElementById('bird-game');

const flappy = new FlappyBird(canvas);
window.addEventListener('DOMContentLoaded',()=> flappy.restart());
// flappy.restart()

