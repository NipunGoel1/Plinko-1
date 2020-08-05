class Particle{
    constructor(x,y,width,){
        var options = {
            isStatic:false,
            restitution:1.1
        }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      this.r =random(0,255);
      this.a =random(0,255);
      this.n =random(0,255);

      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var rand = Math.round(random(0,255));
        push();
        ellipseMode(RADIUS);
        fill(this.r,this.a,this.n)
        ellipse(pos.x,pos.y,this.width,this.width);
        pop();
    }
}