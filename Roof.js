class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);

      }
      display(){
        var roofPos = this.body.position;
        push()
        translate(roofPos.x,roofPos.y);
        strokeWeight(3);
        fill(255,255,0)
        rect(0,0,this.width,this.height);
        pop()
      }
    }