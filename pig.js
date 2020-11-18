class Pig{
    constructor(x, y, radius){
        var options= {
            restitution: 0.3,
        }

        this.pig=Bodies.circle(x, y, radius, options);
        World.add(world, this.pig);

        this.radius=radius
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.pig.position.x, this.pig.position.y,this.radius, this.radius);
    }
}