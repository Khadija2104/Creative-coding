function setup() {
  createCanvas(600, 600);
  background(199, 189, 192);
  smooth();
}

function draw() {
  stroke(0);






  // Alien face
  fill(186, 74, 0 );
   // Face
  fill(23, 165, 137);
  ellipse(300, 200, 250, 300);// Adjusted face ellipse to fit the body
  // Eyes
  fill(250, 215, 160 )
  ellipse(245, 150, 75, 75);
  ellipse(355, 150, 75, 75);

  // Lips
  fill(205, 92, 92);
  ellipse(300, 250, 90, 50);
  // Ears


  // Eyes Details
  fill(0);
  ellipse(250, 150, 30, 30);
  ellipse(350, 150, 30, 30);

  // Alien body (aligned with the head)
  stroke(5);
  fill(218, 247, 166);
  rect(212, 290, 175, 20,10); // Neck
  fill(26, 127, 23);
  rect(212, 310, 175, 100, 30); // Shirt
  noStroke();
  fill(26, 12, 22);
  beginShape();
  vertex(212, 420);
  vertex(387, 420);
  vertex(367, 520);
  vertex(232, 520);
  endShape(); // Legs
  stroke(3);
  strokeWeight(1);
  
  noStroke();
  fill(0, 150, 136 );
  rect(212, 400, 175, 20); // Hands
  fill(139, 195, 74);
  rect(275, 397, 50, 28);

  // Extra details on the body
  fill(121, 134, 203 );
  rotate(0.7);
  ellipse(540, 3, 115, 42);
  rotate(-0.7);
  rotate(-0.7);
  ellipse(-79, 391, 115, 42);
  rotate(0.7);
  fill(204, 204, 255);
  ellipse(160, 375, 40, 40);
  ellipse(440, 375, 40, 40);
  fill(52, 152, 219 );
  ellipse(258, 510, 90, 50);
  ellipse(342, 510, 90, 50);
}
