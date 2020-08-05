class Plinko{
    constructor(x,y,width,){
        var options = {
            isStatic:true
        }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
  
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
     
        ellipseMode(RADIUS);
        fill(255)
        ellipse(pos.x,pos.y,this.width,this.width);
    }
}