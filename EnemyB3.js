class EnemyB3
{
    constructor()
    {
        this.c = color(0, 0, 255);
        this.d = 80;
        this.x = random(0+this.d/2, width-this.d);
        this.y = 50 + this.d/2;
        this.rand = int(random(2));
        if (this.rand == 0) { this.velocityX = random(0, 2); }
        else if (this.rand == 1) { this.velocityX = -random(0, 2); }
        this.velocityY = random(0, 2);
    }
    display(arg1 = this.c, arg2 = this.d)
    {
        push();
        fill(arg1);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, arg2, arg2);
        pop();
    }
    reset()
    {
        this.c = color(0, 0, 255);
        this.x = random(0, width);
        this.y = 0 + this.d/2;
        this.rand = int(random(2));
        if (this.rand == 0) { this.velocityX = random(0, 2); }
        else if (this.rand == 1) { this.velocityX = -random(0, 2); }
        this.velocityY = random(0,2);
    }
    move()
    {
        this.x += this.velocityX;
        this.y += this.velocityY;
        if(this.x > width - (this.d/2) || this.x < 0 + (this.d/2)) { this.velocityX *= -1; }
    }
}