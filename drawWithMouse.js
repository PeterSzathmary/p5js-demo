let fillColor = "yellow";
let strokeColor;
let notSet = true;
let c;

function setup() {
    // put setup code here
    c = createCanvas(400, 400);
    background(40);

    strokeColor = color(255,80,116);
  }
  
  function draw() {
    // put drawing code here

    if (mouseY > height / 2 && notSet) {
        let temp = strokeColor;
        strokeColor = fillColor;
        fillColor = temp;
        notSet = !notSet;
    } else if (mouseY < height / 2 && !notSet) {
        let temp = fillColor;
        fillColor = strokeColor;
        strokeColor = temp;
        notSet = !notSet;
    }

    fill(fillColor);
    strokeWeight(5);
    stroke(strokeColor);

    circle(mouseX, mouseY, 50);
  }

  function mousePressed() {
    saveCanvas(c, 'myCanvas', 'jpg');
  }