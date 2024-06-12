function setup() {
  createCanvas(500, 400);
  noLoop()
}

function draw() {
  background(255);
  let colors = ['#FFB6C1', '#FFD700', '#ADD8E6', '#90EE90', '#FF69B4']; //  pastel colors
  let gridSize = 50;

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let col = random(colors);
      fill(col);
      noStroke();
      rect(x + gridSize / 2, y + gridSize / 2, gridSize * 0.8);
    }
  }
}
