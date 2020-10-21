class Box {
    constructor(x,y,width,height) {
        var options = {
            restitution:0.8,
            friction:1,
            density:0.05
        }

        this.body = Body.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(myWorld,this.body)
    }

    display() {
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,this.width,this.height);
        pop();
    }
}