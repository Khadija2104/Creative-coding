function setup() {
  createCanvas(800, 400); // Set up the canvas size
  background(255); // White background
  textAlign(CENTER, CENTER); // Center text alignment
  textSize(100); // Set text size
  
}

function draw() {
  background(255); // Ensure the background is white

  // Draw a cute background pattern with circles
  drawCuteBackground(1);

  // Draw the cute typography text
  drawCuteText();
}

function drawCuteBackground() {
  noStroke();
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      fill(random(200, 255), random(200, 255), random(200, 255), 150);
      ellipse(i, j, 40, 40);
    }
  }
}

function drawCuteText() {
  fill(215, 189, 226 ); // Light purple color
  text('life is a one time', width / 2, height / 2 - 50);
  fill(173, 216, 230); // Light blue color
  text('offer, use it well', width / 2, height / 2 + 50);

  // Draw some additional cute elements around the text
  drawCuteElements();
}

function drawCuteElements() {
  ellipse(700, 300, 60, 60);
  fill(255, 228, 225); // Misty rose color
  ellipse(700, 100, 40, 40);
  ellipse(100, 300, 40, 40);
  
  fill(144, 238, 144); // Light green color
  ellipse(400, 350, 30, 30);
  ellipse(350, 100, 50, 50);
  
  fill(255, 182, 193); // Light pink for small circles
  ellipse(200, 200, 20, 20);
  ellipse(600, 200, 20, 20);
}

