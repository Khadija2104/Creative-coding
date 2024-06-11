let song;
let fft;
let particles = [];

function preload() {
  song = loadSound('videoplayback.m4a'); // Put your audio file path here
}

function setup() {
  createCanvas(600, 400);
  song.play();
  fft = new p5.FFT();
}

function draw() {
  background(255, 220, 200); // Background color

  let spectrum = fft.analyze();
  let bass = fft.getEnergy('bass');

  let r = map(bass, 0, 255, 100, 255);
  let g = map(sin(frameCount * 0.05), -1, 1, 100, 255);
  let b = map(cos(frameCount * 0.05), -1, 1, 100, 255);

  particles.push(new Particle(width / 2, height / 2, r, g, b));

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y, r, g, b) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.acc = createVector();
    this.color = color(r, g, b);
    this.alpha = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.alpha -= 2;
  }

  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }

  finished() {
    return this.alpha < 0;
  }
}
