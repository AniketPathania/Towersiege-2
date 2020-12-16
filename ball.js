class Ball{

    constructor(x,y,radius){
       var options ={
       isStatic:false,
       restitution:0.8,
       friction:1.0,
       density:1.0, 
       }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius= radius;
       World.add(world,this.body)
    }
    display(){
      push();
      var pos = this/this.body.position;
      ellipseMode(CENTER);
      fill (176,219,83); 
      ellipse(pos.x,pos.y,this.radius);
      pop ();
    }
    
}