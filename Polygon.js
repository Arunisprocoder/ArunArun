class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2
        }
        this.body = Bodies.square(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        fill(color);
        stroke(border);
        strokeWeight(4);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}