class Circle2 {
    constructor() {
        this.c = color(100, 100, 250);
        this.x1 = -10;
        this.y1 = -10;
        this.d = 5;
        this.velocity = 200;
    }
    display(arg1 = this.c, arg2 = this.d) {
        push();
        fill(arg1);
        ellipse(this.x, this.y, arg2, arg2);
        strokeWeight(10);
        stroke(0,0,255);
        line(x, width, x, width)
        pop();
    }
    move() 
    {
        this.y -= this.velocity;
    }
    reset()
    {
        this.x = -10;
        this.y = -10;
    }
}