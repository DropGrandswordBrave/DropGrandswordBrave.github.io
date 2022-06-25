function spaceship()
{
    push();
    fill(0,0,100)
    beginShape();
    vertex(x-30, y-25);
    vertex(x-50, y-80);
    vertex(x-50, y+30);
    vertex(x-30, y+25);
    endShape();
    beginShape();
    vertex(x-15, y-60);
    vertex(x-30, y-25);
    vertex(x-30, y+25);
    vertex(x-5, y+40);
    endShape();
    beginShape();
    vertex(x+30, y-25);
    vertex(x+50, y-80);
    vertex(x+50, y+30);
    vertex(x+30, y+25);
    endShape();
    beginShape();
    vertex(x+15, y-60);
    vertex(x+30, y-25);
    vertex(x+30, y+25);
    vertex(x+5, y+40);
    endShape();
    fill(238,130,238);
    circle(x,y,d);
    fill(255, 200, 0);
    quad(x+5, y-60, x+25, y, x-25, y, x-5, y-60);
    noFill();
    fill(255,182,193)
    ellipse(x, y, d+5, d+5);
    noFill();
    pop();
}