let x
let y;
let speedX;
let speedY;
let ballColor;
let direction;
let c = new Array();

function setup() {
    // put setup code here
    createCanvas(400, 400);

    noStroke();

    x = width / 2;
    y = height / 2;
    direction = setDirection();
    speedX = random(1, 5) * direction;
    direction = setDirection();
    speedY = random(1, 5) * direction;
    ballColor = color(random(255), 0, 0);

    c.push({x: 30, y: 30, size: 5});
    c.push({x: 80, y: 80, size: 15});
  }
  
  function draw() {
    // put drawing code here
    background(180);
    
    if(x > width || x < 0)
    {
        speedX *= -1; // speedX = speedX * -1;
        ballColor = color(random(255), random(255), random(255));
    }

    if (y > height || y < 0) {
        speedY *= -1;
        ballColor = color(random(255), random(255), random(255));
    }

    x += speedX;
    y += speedY;

    fill(ballColor);
    circle(x, y, 20);

    drawCircles(c);

    fill("white");
    circle(mouseX, mouseY, 15);
  }

  function setDirection() {
    let n = random();

    if (n < 0.5) {
        n = -1;
    } else {
        n = 1;
    }

    return n;
  }

  function drawCircles(c){
    for (let i = 0; i < c.length; i++) {
        circle(c[i].x, c[i].y, c[i].size);
    }
  }