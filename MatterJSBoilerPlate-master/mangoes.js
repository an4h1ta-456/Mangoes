class Mangoes{
 constructor(x,y){
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.r = 40;
    this.image = loadImage("Images/mango.png");
    World.add(world, this.body);
    }
    display(){
    push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        pop();
    }
}