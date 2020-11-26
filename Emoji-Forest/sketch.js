let offX = 0;
let offY = 0;
//For Mobile
let xDown = null;
let yDown = null;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  generate();
}
class Star {
  constructor(x, y) {
    let myrng = new Math.seedrandom(`${x + offX}${y + offY}`);
    let exist = myrng() * 100;
    exist = exist > 50 ? true : false;
    if (!exist) return;
    let isPlant = myrng() * 100;
    isPlant = isPlant > 10 ? true : false;
    if (isPlant) {
      let index = floor(myrng() * plants.length);
      let plant = plants[index];
      textSize(32);
      text(plant.repeat(3), x, y);
    } else {
      let index = floor(myrng() * animals.length);
      let animal = animals[index];
      textSize(animal.size);
      for (let i = animal.size; i < 120; i += animal.size)
        text(
          animal.img,
          x + i + myrng() * animal.size,
          y + myrng() * animal.size
        );
    }
  }
}
function generate() {
  background(1, 68, 33);

  for (let x = 0; x < width; x += 120) {
    for (let y = 0; y < height; y += 120) {
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
function touchStarted(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  generate();
}
//for Mobile
function touchMoved(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      //right
      offX += 0.5;
    } else {
      //left
      offX -= 0.5;
    }
  } else {
    if (yDiff > 0) {
      //down
      offY += 0.5;
    } else {
      //up
      offY -= 0.5;
    }
  }
  xDown = null;
  yDown = null;
  generate();
  return false;
}
