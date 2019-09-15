import FlappyBird from './game';

window.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('bird-game');
  new FlappyBird(canvas);
});
