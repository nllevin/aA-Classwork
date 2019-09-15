const CONSTANTS = {
  GRAVITY: 0.5,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};

export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.canvasWidth = dimensions.width;
    this.canvasHeight = dimensions.height;
    this.xPos = this.canvasWidth / 3;
    this.yPos = this.canvasHeight / 2;
  }

  drawBird(context) {
    context.fillStyle = 'yellow';
    context.fillRect(this.xPos, this.yPos, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  animate(context) {
    this.move();
    this.drawBird(context);
  }
  
  move() {
    this.yPos += this.velocity;
    if (this.velocity <= CONSTANTS.TERMINAL_VEL) {
      this.velocity += CONSTANTS.GRAVITY;
    }
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  getBounds() {
    return {
      top: this.yPos,
      bottom: this.yPos + CONSTANTS.BIRD_HEIGHT,
      left: this.xPos,
      right: this.xPos + CONSTANTS.BIRD_WIDTH
    };
  }
}

