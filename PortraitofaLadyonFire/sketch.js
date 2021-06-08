class Particle
{
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.intx= Math.floor(x)
    this.inty =Math.floor(y)
    this.velocity =random(50)
  }
  draw()
  {
    stroke(247,55,24,brightmap[this.inty][this.intx])
    strokeWeight(3)
    point(this.x,this.y)
  }
  update()
  {
    this.y-=random(10);
    this.inty-=Math.floor(this.y);
    //console.log(this.speed)
    this.speed = brightmap[this.intx][this.inty]
    //console.log(this.intx,this.inty,brightmap[this.intx][this.inty])
    if(this.y<0) this.y=height-1;this.inty=Math.floor(this.y);this.x=random(width);this.intx =Math.floor(this.x);
  }
}

let particles=[];
let img;
let brightmap=[];
function preload()
{
  img = loadImage("image.jpeg")
}

function setup()
{
  img.loadPixels()
  for(let y=0;y<img.height;y++)
  {
    let row =[]
    for(let x=0;x<img.height;x++)
    {
      let r = img.pixels[(y * 4* img.width)+(x*4)];
      let g = img.pixels[(y * 4* img.width)+(x*4 +1)];
      let b = img.pixels[(y * 4* img.width)+(x*4 +2)];

      let bright = Math.sqrt((r*r)*0.299+ (g*g)*0.587+(b*b)*0.114);
      row.push(bright)

    }
    brightmap.push(row)
  }
  createCanvas(img.width,img.height);
  for(let i=0;i<5000;i++) particles.push(new Particle(random(width),random(height/2)))
}
function draw()
{
  background(0)
  for(particle of particles)
  {
    particle.draw()
    particle.update();
  }

}