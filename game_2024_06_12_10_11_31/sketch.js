let mode = 'title';

let MyBall;
let MyPaddle;
let MyScore = 0;
let MyLife = 4;
let MyBricks = [];
let MyColors = ['#A3E4D7 ', '#C39BD3 ', '#AED6F1 ', '#F7CAC9'];
let backgroundColor;

function setup() {
  createCanvas(700,500);
  backgroundColor = color('#FFB6C1'); // Light pink background

  MyBall = new Ball();
  MyPaddle = new Paddle();
  
  // Create more bricks
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      MyBricks.push(new Brick(j * 60 + 80, i * 30 + 60, MyColors[i % MyColors.length]));
    }
  }
}

function draw() {
  background(backgroundColor);

  if (mode === 'title') {
    titleScreen();
  } else if (mode === 'gameplay') {
    gameplayScreen();
  } else if (mode === 'gamewin') {
    gamewinScreen();
  } else if (mode === 'gameover') {
    gameoverScreen();
  }
}

function titleScreen() {
  background(255, 182, 193);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255);
  text('Brick wall', width / 2, height / 4);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(255);
  text('Press ENTER to start game', width / 2, height / 2);
  fill(255);
  text('Get 450 points to win!', width / 2, height / 1.5);
}

function gameplayScreen() {
  for (let brick of MyBricks) {
    brick.show();
  }

  MyPaddle.show();
  MyPaddle.move();

  MyBall.show();
  MyBall.move();
  MyBall.bounce(MyPaddle);
  MyBall.bounceEdge();

  for (let i = MyBricks.length - 1; i >= 0; i--) {
    if (MyBall.hits(MyBricks[i])) {
      MyBall.bounceBrick(MyBricks[i]);
      MyBricks.splice(i, 1);
      MyScore += 9;
    }
  }

  fill(255);
  textSize(24);
  textAlign(LEFT);
  text('Score: ' + MyScore, 10, 10);
  text('Life: ' + MyLife, 10, 60);

  if (MyBall.ballIsDead()) {
    MyLife--;
    if (MyLife === 0) {
      mode = 'gameover';
    } else {
      MyBall.reset();
    }
  }

  if (MyScore >= 450) {
    mode = 'gamewin';
  }
}

function gamewinScreen() {
  background(255, 182, 193);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text('YOU WIN', width / 2, height / 4);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Press ENTER to start game', width / 2, height / 2);
}

function gameoverScreen() {
  background(255, 182, 193);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text('GAME OVER', width / 2, height / 4);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Press ENTER to start game', width / 2, height / 2);
}

function keyPressed() {
  if (mode === 'title' && keyCode === ENTER) {
    mode = 'gameplay';
  }

  if ((mode === 'gamewin' || mode === 'gameover') && keyCode === ENTER) {
    MyBall.reset();
    MyPaddle.reset();
    MyLife = 5;
    MyScore = 0;
    MyBricks = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 10; j++) {
        MyBricks.push(new Brick(j * 60 + 80, i * 30 + 60, MyColors[i % MyColors.length]));
      }
    }
    mode = 'title';
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 6;
    this.yspeed = -6;
    this.radius = 10;
    this.color = '#FF69B4'; // Pink ball
  }

  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce(paddle) {
    if (this.x - this.radius < paddle.x + paddle.width / 2 &&
        this.x + this.radius > paddle.x - paddle.width / 2 &&
        this.y + this.radius > height - paddle.height) {
      this.yspeed = -this.yspeed;
      let dx = this.x - (paddle.x - paddle.width / 2);
      this.xspeed = map(dx, 0, paddle.width, -6, 6);
    }
  }

  bounceEdge() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.xspeed = -this.xspeed;
    }
    if (this.y - this.radius < 0) {
      this.yspeed = -this.yspeed;
    }
  }

  ballIsDead() {
    return this.y + this.radius > height;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 6;
    this.yspeed = -6;
  }

  hits(brick) {
    let d = dist(this.x, this.y, brick.x, brick.y);
    return d < this.radius + brick.width / 2;
  }

  bounceBrick(brick) {
    this.yspeed = -this.yspeed;
  }
}

class Paddle {
  constructor() {
    this.width = 150;
    this.height = 20;
    this.x = width / 2;
    this.y = height - 20;
    this.color = '#FF69B4'; // Pink paddle
  }

  show() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = mouseX;
    this.x = constrain(this.x, 0 + this.width / 2, width - this.width / 2);
  }

  reset() {
    this.x = width / 2;
  }
}

class Brick {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 30;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
