export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = this.createPipes();
  }

  createPipes() {
    const startingPipes = [];
    let currentPipe;
    for (let i = 0 ; i < 3 ; i++){
      currentPipe = new Pipe(this.dimensions);
      startingPipes.push(currentPipe);
    }
    return startingPipes;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx){
    this.drawBackground(ctx);
    this.pipes.forEach((pipe) => pipe.animate(ctx)); 
    this.movePipes(this.pipes);
  }

  movePipes(arrayOfPipes){
    this.moveOnePipe(arrayOfPipes[0]);
    let newPipe = new Pipe(this.dimensions)
    if (arrayOfPipes[0].positionx <= LCONSTANTS.HORIZ_SPACING - 100){
      this.moveOnePipe(arrayOfPipes[1]);
      if (arrayOfPipes[1].positionx <= LCONSTANTS.HORIZ_SPACING - 100){
        this.moveOnePipe(arrayOfPipes[2]);
      }
    }

    if (arrayOfPipes[0].positionx <= -100){
      arrayOfPipes.shift()
      arrayOfPipes.push(newPipe)
    }
  }

  moveOnePipe(pipe){
    pipe.positionx -= 1;
  }
}

class Pipe {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.gap = LCONSTANTS.VERT_GAP
    this.gap_height = this.getRandomGapHeight(50, this.dimensions.height - this.gap - 50)
    this.positionx = this.dimensions.width;
  }

  animate(ctx){
    this.drawPipe(ctx);
    this.drawGap(ctx);
  }

  drawPipe(ctx){
    ctx.fillStyle = 'green'
    ctx.fillRect(this.positionx, 0, 100, this.dimensions.height)
  }

  drawGap(ctx){
    ctx.fillStyle = 'skyblue'
    ctx.fillRect(this.positionx, this.gap_height, 100, this.gap)
  }
  getRandomGapHeight(min, max){
    return Math.random() * (max - min) + min;
  }
}

const LCONSTANTS = {
  HORIZ_SPACING: 240,
  VERT_GAP: 150,
}
