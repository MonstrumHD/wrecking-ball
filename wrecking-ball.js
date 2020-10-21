class Ball {
    constructor(x,y,width,height) {
        var options = {
            density:1,
            friction:0.05
        }

        this.body = Body.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(myWorld,this.body)
    }

    display() {
        ellipse(0,0,this.width,this.height)
    }
}