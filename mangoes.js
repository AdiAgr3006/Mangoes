class Mangoes {
    constructor(x,y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.circle(x,y,20, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0,40,40);
        pop();

    }
}