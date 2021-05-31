let noiseOff = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  generate();
}
function generate() {
  noiseSeed(noiseOff);
  let xoff = 0;
  background(0);
  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x += width / 16) {
    let y = height - noise(xoff * noiseOff) * 300;
    fill(1, 68, 33);
    vertex(x, y);
    xoff += 0.1;
  }
  vertex(width, height);
  endShape(CLOSE);

  for (let x = 0; x < width; x += width / 16) {
    for (let y = 30; y < height / 6; y += height / 16) {
      fill(255);
      if (noise(x + y) > 0.6) {
        let angle = TWO_PI / 10;
        let halfAngle = angle / 2.0;
        let r1 = noise(xoff) * 30;
        let r2 = noise(noiseOff) * 10;
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
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    noiseOff -= 0.1;
  } else if (keyCode === RIGHT_ARROW) {
    noiseOff += 0.1;
  }
  generate();
}
