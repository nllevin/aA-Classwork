import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas) {
    canvas.addEventListener('mousedown', this.click.bind(this));
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.highScore = 0;
    this.restart();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    this.checkGameOver();
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }


  checkGameOver() {
    if ( this.level.collidesWith(this.bird.getBounds()) ) {
      if (this.level.score > this.highScore ) {
        this.highScore = this.level.score;
      }
      setTimeout( () => {
        alert(`Game over!\nFinal score: ${this.level.score}\nHigh score: ${this.highScore}`); 
        this.restart(); 
      });
    }
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }

  play() {
    this.running = true;
    this.animate();
  }

  click() {
    if (!this.running) {
      this.running = true;
      this.animate();
    }
    this.bird.flap();
  }
}