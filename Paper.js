class Paper {
    constructor(x, y, width, height) {
      var options = {
          isstatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      eclipse(x,y,width,height,options);
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  }
  