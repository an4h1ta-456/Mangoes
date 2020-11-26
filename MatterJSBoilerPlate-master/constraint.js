class Connect{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.connect = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.connect);

    }

    fly(){
        this.connect.bodyA = null;

    }


    display(){
        if (this.connect.bodyA){  
        var pointA = this.connect.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        stroke("grey");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}