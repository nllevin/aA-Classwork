const CONSTANTS = {
  PIPE_SPACING: 300,
  PIPE_GAP: 150,
  PIPE_MIN_DIST_FROM_EDGE: 50,
  PIPE_VELOCITY: 3.5,
  PIPE_WIDTH: 80
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.score = 0;
    this.pipes = Array.from( 
      { length: 3 }, 
      (_, idx) => this.makePipe(idx * CONSTANTS.PIPE_SPACING)
    );
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  makePipe(startShift = 0) {
    return { 
      scored: false,
      xPos: (3 * CONSTANTS.PIPE_SPACING - CONSTANTS.PIPE_WIDTH) + startShift, 
      topOfGapPos: 
        Math.random() 
          * (this.dimensions.height - CONSTANTS.PIPE_GAP - 2 * CONSTANTS.PIPE_MIN_DIST_FROM_EDGE)
          + CONSTANTS.PIPE_MIN_DIST_FROM_EDGE
    };
  }

  animate(ctx) {
    this.movePipes();
    this.updateScore();
    this.drawBackground(ctx);
    this.drawPipes(ctx);
    if (this.pipes[0].xPos < 3 * CONSTANTS.PIPE_SPACING - CONSTANTS.PIPE_WIDTH - CONSTANTS.PIPE_VELOCITY) {
      this.drawScore(ctx);
    }
  }

  updateScore() {
    this.pipes.forEach( pipe => {
      if (pipe.scored === false && pipe.xPos + CONSTANTS.PIPE_WIDTH < this.dimensions.width / 3) {
        pipe.scored = true;
        this.score += 1;
      }
    });
  }

  drawScore(ctx) {
    ctx.font = '50px Futura';
    ctx.strokeText(this.score, this.dimensions.width / 2 - 15, 100);
  }

  movePipes() {
    this.pipes.forEach( pipe => pipe.xPos -= CONSTANTS.PIPE_VELOCITY );
    if (this.pipes[0].xPos <= -CONSTANTS.PIPE_WIDTH) {
      this.pipes.shift();
      this.pipes.push(this.makePipe());
    }
  }

  drawPipes(ctx) {
    this.pipes.forEach( pipe => {
      ctx.fillStyle = 'green';
      ctx.fillRect(pipe.xPos, 0, CONSTANTS.PIPE_WIDTH, pipe.topOfGapPos);
      ctx.fillRect(
        pipe.xPos, 
        pipe.topOfGapPos + CONSTANTS.PIPE_GAP,
        CONSTANTS.PIPE_WIDTH,
        this.dimensions.height - (pipe.topOfGapPos + CONSTANTS.PIPE_GAP)
      );
    });
  }

  collidesWith(bounds) {
    return bounds.bottom >= this.dimensions.height
      || this.pipes.some( pipe => {
        return bounds.right >= pipe.xPos && bounds.left <= pipe.xPos + CONSTANTS.PIPE_WIDTH
          && ( bounds.top <= pipe.topOfGapPos || bounds.bottom >= pipe.topOfGapPos + CONSTANTS.PIPE_GAP)
      });
  }
}