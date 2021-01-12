class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 250,
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke("black");
            strokeWeight(0);
            line(pointA.x,pointA.y-50,pointB.x,pointB.y);
            pop()
        }
    }
    
