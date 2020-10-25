colors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];
let offX = 0;
let offY = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  generate();
}
class Star {
  constructor(x, y) {
    ellipseMode(CENTER);
    let myrng = new Math.seedrandom(`${x + offX}${y + offY}`);
    let exist = myrng() * 100;
    exist = exist < 20 ? true : false;
    if (!exist) return;
    let colorIndex = floor(myrng() * 7);
    fill(colors[colorIndex]);
    let angle = TWO_PI / 10;
    let halfAngle = angle / 2.0;
    let r1 = myrng() * 30;
    let r2 = myrng() * 10;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * r1;
      let sy = y + sin(a) * r1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * r2;
      sy = y + sin(a + halfAngle) * r2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
function generate() {
  background(0);

  for (let x = 0; x < width; x += 32) {
    for (let y = 0; y < height; y += 32) {
      new Star(x, y);
    }
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    offX -= 0.5;
  } else if (keyCode === RIGHT_ARROW) {
    offX += 0.5;
  } else if (keyCode === UP_ARROW) {
    offY -= 0.5;
  } else if (keyCode === DOWN_ARROW) {
    offY += 0.5;
  }
  generate();
}
