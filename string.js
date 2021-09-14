class String {
    contructor(p, b){
        var options = {
            bodyA: b,
            pointA: p,
            stiffness: 0.04,
            length: 10
        }

        this.constraint = Matter.Constraint.create(options);
        World.add(world, this.constraint);
        console.log("hi");
    }

    display(){
        stroke(255,255,255);
        line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y, this.constraint.pointA.x, this.constraint.pointA.y);
        

    }
}