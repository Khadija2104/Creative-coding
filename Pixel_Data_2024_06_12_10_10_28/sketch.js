var img, x, y;

function preload() {
  // Preload the image
  img = loadImage("image.jpg");
}

function setup() {
  // Create the canvas and set up the background and no stroke
  createCanvas(640, 359);
  background(0);
  noStroke();
}

function draw() {
  // Set the background to black each frame
  background(0);

  // Get the current mouse position
  x = mouseX;
  y = mouseY;

  // Display the image at the top-left corner
  image(img, 0, 0);

  // Get the color of the pixel at the mouse position
  var c = get(x, y);

  // Use that color to draw a circle at the mouse position
  fill(c);
  ellipse(x, y, 100, 100);
}
