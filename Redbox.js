class Redbox {
    constructor(x, y) {
      var options = {
          restitution:0.4,
          friction:0.2,
      }
      this.width = 30;
      this.height = 40;
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <4){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
    }
  }
  };