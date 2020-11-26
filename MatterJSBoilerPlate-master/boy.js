class Boy{
    constructor(x, y){
        var options={
            isStatic: false,
            friction: 0,
            restitution: 1,
            density: 0.8
        }
    
    this.body = Bodies.rectangle(x, y, 20, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/boy.png");

    World.add(world, this.body);
    } 
    
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40);
        rect(0,0,this.r);
        pop();
        

    }
}