colors=["#f9d5e5","#5b9aa0","#eeac99"," #d6d4e0","#b8a9c9","#622569","#c83349","#ffcc5c","#ffcc5c"," #feb236","#ff7b25","#405d27"]
class Particle
{
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.r=5
    this.color=random(colors);
    this.angle=this.speed=0;
  }
  draw()
  {
    fill(this.color)
    arc(this.x,this.y,this.r,this.r,0,TWO_PI)
  }
  update()
  {
    let deltaRadius = random(-0.5,0.5)
    let deltaSpeed = random(-0.01,0.01)
    let deltaAngle = random(-PI,PI)
    this.speed+=deltaSpeed;
    this.angle+=deltaAngle;
    let dx = this.r * sin(this.speed);let dy =this.r * cos(this.angle)
    this.x+=dx;this.y+=dy;this.r+=deltaRadius;
    this.r+= (this.r<0)?-2*deltaRadius:0;
  }
}

let particles=[];

function setup()
{
  createCanvas(window.innerWidth,window.innerHeight)
  noStroke()
  background(random(colors))
  for(let i=0;i<150;i++) particles.push(new Particle(random(width),random(height)))
}
function draw()
{
  for(particle of particles)
  {
  particle.update()
  particle.draw()
  }

}