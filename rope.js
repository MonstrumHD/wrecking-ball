class Line {
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            
            length:10,
            stiffness:0.2
        }
        
        this.pointB = pointB

        this.rope = Constraint.create(options)
        World.add(myWorld,this.rope)
    }

    display() {
        line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
    }
}