class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 0.4       
        }
        this.pointB = pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
		this.chain.bodyA = body;
	}
	
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3.5);
        stroke("#fff")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

};