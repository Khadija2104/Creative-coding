function setup() {
  createCanvas(800, 400); // Set up the canvas size
  background(239); 
}

function draw() {
  background(239,239,170); // Clear the canvas each frame

  // Car body
  fill(30, 20, 10); 
  rect(200, 200, 400, 100); // Main body
  rect(250, 150, 300, 100); // Upper part of the car

  
 

    // Draw the car door
  fill(130,81,81); 
  rect(350, 200, 90, 100); // Car door
  
  
    // Draw the door handle
  fill(255);
  rect(420, 250, 20, 5); // Door handle
 
  
    // Windows
  fill(135, 206, 235); // Light blue color for the windows
  rect(260, 160, 90, 70); // Front window
  rect(350, 160, 90, 70); // Middle window
  rect(440, 160, 90, 70); // Rear window
 
  

 
  
  // Wheels
  fill(50); // Dark grey color for the wheels
  ellipse(270, 320, 80, 80); // Front wheel
  ellipse(530, 320, 80, 80); // Rear wheel

  // Wheel rims
  fill(0); // Light grey color for the wheel rims
  ellipse(270, 320, 40, 40); // Front rim
  ellipse(530, 320, 40, 40); // Rear rim

  // Details
  fill(158,189,158); 
  rect(200, 220, 20, 60); // Grill
  fill(255); // White color for the headlights
  ellipse(220, 250, 20, 20); // Left headlight
  ellipse(220, 280, 20, 20); // Right headlight
  
    // Details
  fill(158,189,158); 
  rect(580, 220, 20, 60); // Grill
  fill(255); // White color for the headlights
  ellipse(600, 250, 20, 20); // Left headlight
  ellipse(600, 280, 20, 20); // Right headlight


}
