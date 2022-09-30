import Level from './level.js';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    this.level.drawBackground(this.ctx)
    this.bird.animate(this.ctx);
    if (this.running === true){
      requestAnimationFrame(this.animate.bind(this, this.ctx));
    }
  }

  restart(){
    this.level = new Level(this.dimensions)
    this.bird = new Bird(this.dimensions)
    this.running = false;
    this.play();
  }

  play(){
    this.running = true;
    this.animate();
  }
}
class Bird {
  constructor(dimensions){
    this.velocity = 0;
    this.dimensions = dimensions
    this.positiony = this.dimensions.height/2 
    this.positionx = this.dimensions.width/3
  }
  

  animate(ctx){
    this.move();
    this.drawBird(ctx);
  }

  move(){
    this.positiony += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap(){
    this.velocity = -8;

  }

  drawBird(ctx){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.positionx, this.positiony, 50, 60);
  }
}


const CONSTANTS = {
  GRAVITY: 0.8,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};