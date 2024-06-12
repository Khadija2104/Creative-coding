let trail = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(209, 242, 235 ); // Background color

  // Add current mouse position to the trail
  trail.push(createVector(mouseX, mouseY));

  // Remove oldest points if trail gets too long
  if (trail.length > 50) {
    trail.splice(0, 1);
  }

  // Draw shapes and trail
  for (let i = 0; i < trail.length; i++) {
    let hue = map(i, 0, trail.length - 1, 0, 255);
    fill(hue, 209, 242, 235 );
    noStroke();
    ellipse(trail[i].x, trail[i].y, 20, 20);
    rect(trail[i].x - 10, trail[i].y - 10, 20, 20);

    if (i > 0) {
      stroke(hue, 209, 242, 235 );
      strokeWeight(5);
      line(trail[i].x, trail[i].y, trail[i - 1].x, trail[i - 1].y);
    }
  }
}
