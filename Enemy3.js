class Enemy3
{
    constructor()
    {
        this.c = color(0, 0, 255);
        this.d = 50;
        this.x = random(0+this.d/2, width-this.d/2);
        this.y = 30+this.d/1.5;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(0,2); } 
        else if(this.rand == 1) { this.velocityX = -random(0,2); } 
        this.velocityY = random(0, 2);
    }
    display(arg1 = this.c, arg2 = this.d)
    {
        //enemy
        push();
        fill(arg1);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, arg2, arg2);
        pop();
    }
    reset()
    {
        this.c = color(10, 10, 255);
        this.d = 50
        this.x = random(0, width);
        this.y = 0+this.d;
        this.rand = int(1, 2);
        if (this.rand == 1) { this.velocityX = random(0, 2); }
        else if (this.rand == 2) { this.velocityX = -random(0, 2); }
        this.velocityY = random(0,2);
    }
    return()
    {
        this.c = color(0, 0, 255);
        this.d = 90;
        this.x1 = random(0, width);
        this.y1 = 0+this.d;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = 1; } 
        else if(this.rand == 1) { this.velocityX = -1; }
        this.velocityY = random(0, 2);
    }
    move()
    {
        this.x += this.velocityX;
        this.y += this.velocityY;
        if(this.x > width - (this.d/2) || this.x < 0 + (this.d/2)) { this.velocityX *= -1; }
    }
}