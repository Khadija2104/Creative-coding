let data = [45, 70, 120, 200, 150, 100, 90, 180, 220, 130]; // Sample data

function setup() {
  createCanvas(600, 400);
  background(255); // Background color

  // Draw the data visualization
  drawDataVisualization(data);
}

function drawDataVisualization(data) {
  let barWidth = width / data.length;
  let maxData = max(data);

  for (let i = 0; i < data.length; i++) {
    let x = i * barWidth;
    let barHeight = map(data[i], 0, maxData, 0, height - 50);

    // colors
    let r = map(data[i], 0, maxData, 255, 100);
    let g = map(sin(frameCount * 0.05 + i), -1, 1, 150, 255);
    let b = map(cos(frameCount * 0.05 + i), -1, 1, 200, 255);

    fill(r, g, b);
    rect(x, height - barHeight, barWidth, barHeight);

    // Add data labels
    fill(0);
    textAlign(CENTER, BOTTOM);
    textSize(14);
    text(data[i], x + barWidth / 2, height - barHeight - 5);
  }
}
