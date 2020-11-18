class Bird{
constructor(x, y, radius){
    var options= {
        restitution: 0.3,
    }

    this.bird=Bodies.circle(x, y, radius, options);
    World.add(world, this.bird);

    this.radius=radius
}

display(){
    this.bird.position.x=mouseX;
    this.bird.position.y=mouseY
    ellipseMode(RADIUS);
    ellipse(this.bird.position.x, this.bird.position.y,this.radius, this.radius);
}
}