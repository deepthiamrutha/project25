class Paper{
constructor(x,y) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y,70,options);
    this.image=loadImage("paper.png");

    World.add(world, this.body);
}
display() {
var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      stroke("black");
      fill("lightBlue");
      imageMode(CENTER);
      image(this.image,0,0,30,30);
      pop();
}
}