let 
x = 0, y = 0,
x1 = 0, y1 = 0,
d = 50;
//bullet
let bullet1 = [];
let bullet1check = [];
let bullet1Num = 100;
//elzup
let bullet2 = [];
let bullet2check = [];
let bullet2Num = 100;
//enemy
let enemy1 = [];
let enemyNum1 = 5;
let enemy2 = [];
let enemyNum2 = 5;
let enemy3 = [];
let enemyNum3 = 5;
let enemy4 = [];
let enemyNum4 = 5;

let USERHP = 15;
let SCORE = 0;
let playcheck = 0;

let button;

function setup() {
  button = createButton('Start Game');
  background(0);
  createCanvas(900, 1200);

  x = width/2;
  y = height-40;
  for(let i = 0; i < bullet1Num; i++)
  {
    bullet1[i] = new Circle();
    bullet1check[i] = 0;
  }
  for(let i = 0; i < (bullet2Num); i++)
  {
    bullet2[i] = new Circle2();
    bullet2check[i] = 0;
  }
  for (let i = 0; i < enemyNum1; i++)
  {
    enemy1[i] = new Enemy1();
  }
  for (let i = 0; i < enemyNum2; i++)
  {
    enemy2[i] = new Enemy2();
  }
  for (let i = 0; i < enemyNum3; i++)
  {
    enemy3[i] = new Enemy3();
  }
  for (let i = 0; i < enemyNum4; i++)
  {
    enemy4[i] = new Enemy4();
  }
}

function draw() 
{
  background(0,0,28);
  print(USERHP);
  spaceship();
  enemyCheck1();
  enemyCheck2();
  enemyCheck3();
  enemyCheck4();
  // enemyBCheck();
  move();
  bullet1Check();
  bullet2Check();
  colliMeEnemy();
  colliBulletEnemy();
  colliBullet2Enemy();
  textPrint();
  EndOfGame();
}
//user action
function move()
{
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  } 
  if (keyIsDown(UP_ARROW)) {
      y -= 5;
  } 
  if (keyIsDown(DOWN_ARROW)) {
      y += 5;
  }
}
function bullet1Check() {
  for(let i = 0; i < bullet1Num; i++)
  { 
    bullet1[i].display();
    bullet1[i].move();
  }
  for(let i = 0; i < bullet1Num; i++)
  { 
    if(bullet1[i].y <0)
    {
      bullet1check[i] = 0;
    }
  }
}
function bullet2Check() {
  for(let i = 0; i < (bullet2Num); i++)
  { 
    bullet2[i].display();
    bullet2[i].move();
  }
  for(let i = 0; i < (bullet2Num); i++)
  {
    if(bullet2[i].y<0)
    {
      bullet2check[i] = 0;
    }
  }
}
function keyPressed()
{
  if(key == 'z')
  {
    for(let i = 0; i < bullet1Num; i++)
    {
      if(bullet1check[i] == 0)
      {
        bullet1[i].x = x;
        bullet1[i].y = y;
        bullet1check[i] = 1;
        break;
      }
    }
  }
  else if(key == 'x')
  {
    for(let i = 0; i < bullet2Num; i++)
    {
      if(bullet2check[i] == 0)
      {
        bullet2[i].x = x;
        bullet2[i].y = y;
        bullet2check[i] = 1;
        break;
      }
    }
  }
  else if(key == 'r')
  {
    reset();
  }
}
function textPrint()
{
  push();
  fill(255,255,0);
  rect(0,0,width,30);
  fill(0);
  text("SCORE : "+SCORE, 10, 20);
  text("HP : "+USERHP, width-50, 20);
  pop();
}

//enemy state
function enemyCheck1()
{
  let i = 0;
  while(i<enemyNum1)
  {
    enemy1[i].display();
    enemy1[i].move();
    i++;
  }
  for(let i = 0; i<enemyNum1; i++)
  { 
    if(enemy1[i].y > height)
    {
      enemy1[i].reset();
    }
  }
}
function enemyCheck2()
{
  let i = 0;
  while(i<enemyNum2)
  {
    enemy2[i].display();
    enemy2[i].move();
    i++;
  }
  for(let i = 0; i<enemyNum2; i++)
  {
    if(enemy2[i].y > height)
    {
      enemy2[i].reset();
    }
  }
}
function enemyCheck3()
{
  let i = 0;
  while(i<enemyNum3)
  {
    enemy3[i].display();
    enemy3[i].move();
    i++;
  }
  for(let i = 0; i<enemyNum3; i++)
  {
    if(enemy3[i].y > height)
    {
      enemy3[i].reset();
    }
  }
}
function enemyCheck4()
{
  let i = 0;
  while(i<enemyNum4)
  {
    enemy4[i].display();
    enemy4[i].move();
  i++;
  }
  for(let i = 0; i<enemyNum4; i++)
{
  if(enemy4[i].y > height)
  {
    enemy4[i].reset();
  }
} 
}
function colliBulletEnemy()
{
  for(let i = 0; i<enemyNum1; i++)
  { 
    for(let j = 0; j<bullet1Num; j++)
    {
      let dis = 100;
      if(bullet1check[j] == 1) 
      {
        dis = dist(bullet1[j].x, bullet1[j].y, enemy1[i].x, enemy1[i].y);
      }
      if(dis<enemy1[i].d/2)
      {
        print(dis);
        enemy1[i].return();
        enemy1[i].velocity=0;
        SCORE+=1;
        bullet1check[j]=0;
        bullet1[j].reset();
      }
    }
  }
  for(let i = 0; i<enemyNum2; i++)
  { 
    for(let j = 0; j<bullet1Num; j++)
    {
      let dis = 100;
      if(bullet1check[j] == 1) 
      {
        dis = dist(bullet1[j].x, bullet1[j].y, enemy2[i].x, enemy2[i].y);
      }
      if(dis<enemy2[i].d/2)
      {
        print(dis);
        enemy2[i].return();
        enemy2[i].velocity=0;
        SCORE+=1;
        bullet1check[j]=0;
        bullet1[j].reset();
      }
    }
  }
  for(let i = 0; i<enemyNum3; i++)
  { 
    for(let j = 0; j<bullet1Num; j++)
    {
      let dis = 100;
      if(bullet1check[j] == 1) 
      {
        dis = dist(bullet1[j].x, bullet1[j].y, enemy3[i].x, enemy3[i].y);
      }
      if(dis<enemy3[i].d/2)
      {
        print(dis);
        enemy3[i].return();
        enemy3[i].velocity=0;
        SCORE+=1;
        bullet1check[j]=0;
        bullet1[j].reset();
      }
    }
  }
  for(let i = 0; i<enemyNum4; i++)
  { 
    for(let j = 0; j<bullet1Num; j++)
    {
      let dis = 100;
      if(bullet1check[j] == 1) 
      {
        dis = dist(bullet1[j].x, bullet1[j].y, enemy4[i].x, enemy4[i].y);
      }
      if(dis<enemy4[i].d/2)
      {
        print(dis);
        enemy4[i].return();
        enemy4[i].velocity=0;
        SCORE+=1;
        bullet1check[j]=0;
        bullet1[j].reset();
      }
    }
  }
}

function colliBullet2Enemy()
{
  for(let i = 0; i< enemyNum1; i++)
  { 
    for(let j = 0; j<bullet2Num; j++)
    {
      let dis = 100;
      if(bullet2check[j] == 1) 
      {
        dis = dist(bullet2[j].x, bullet2[j].y, enemy1[i].x, enemy1[i].y);
      }
      if(dis<enemy1[i].d/2)
      {
        print(dis);
        enemy1[i].reset();
        enemy1[i].y = -10;
        bullet2check[j]=0;
        bullet2[j].reset();
        SCORE+=3;
      }
    }
  }
  for(let i = 0; i< enemyNum2; i++)
  { 
    for(let j = 0; j<(bullet2Num); j++)
    {
      let dis = 100;
      if(bullet2check[j] == 1) 
      {
        dis = dist(bullet2[j].x, bullet2[j].y, enemy2[i].x, enemy2[i].y);
      }
      if((dis<enemy2[i].d)/2)
      {
        print(dis);
        enemy2[i].reset();
        enemy2[i].y = -10;
        bullet2check[j]=0;
        bullet2[j].reset();
        SCORE+=3;
      }
    }
  }
  for(let i = 0; i<enemyNum3; i++)
  { 
    for(let j = 0; j<(bullet2Num); j++)
    {
      let dis = 100;
      if(bullet2check[j] == 1) 
      {
        dis = dist(bullet2[j].x, bullet2[j].y, enemy3[i].x, enemy3[i].y);
      }
      if((dis<enemy3[i].d)/2)
      {
        print(dis);
        enemy3[i].reset();
        enemy3[i].y = -10;
        bullet2check[j]=0;
        bullet2[j].reset();
        SCORE+=3;
      }
    }
  }
  for(let i = 0; i<enemyNum4; i++)
  { 
    for(let j = 0; j<(bullet2Num); j++)
    {
      let dis = 100;
      if(bullet2check[j] == 1) 
      {
        dis = dist(bullet2[j].x, bullet2[j].y, enemy4[i].x, enemy4[i].y);
      }
      if((dis<enemy4[i].d)/2)
      {
        print(dis);
        enemy4[i].reset();
        enemy4[i].y = -10;
        bullet2check[j]=0;
        bullet2[j].reset();
        SCORE+=3;
      }
    }
  }
}

function colliMeEnemy()
{
  for(let i = 0; i<enemyNum1; i++)
  { 
    let dis = 100;
    dis = dist(x, y, enemy1[i].x, enemy1[i].y);
    if(dis<d/2)
    {
      print(dis);
      fill(220,20,60);
      USERHP--;
    }    
  }
  for(let i = 0; i<enemyNum2; i++)
  { 
    let dis = 100;
    dis = dist(x, y, enemy2[i].x, enemy2[i].y);
    if(dis<d/2)
    {
      print(dis);
      fill(220,20,60);
      USERHP--;
    }    
  }
  for(let i = 0; i<enemyNum3; i++)
  { 
    let dis = 100;
    dis = dist(x, y, enemy3[i].x, enemy3[i].y);
    if(dis<d/2)
    {
      print(dis);
      fill(220,20,60);
      USERHP--;
    }    
  }
  for(let i = 0; i<enemyNum4; i++)
  { 
    let dis = 100;
    dis = dist(x, y, enemy4[i].x, enemy4[i].y);
    if(dis<d/2)
    {
      print(dis);
      fill(220,20,60);
      USERHP--;
    }    
  }
}

function reset()
{
  playcheck++;
  button.hide();
  USERHP = 10;
  SCORE = 0;
  x=width/2;
  y=height-40;

  bullet1 = [];
  bullet1check = [];
  bullet2 = [];
  bullet2check = [];
  
  enemy1 = [];
  enemy2 = [];
  enemy3 = [];
  enemy4 = [];

  for(let i = 0; i<bullet1Num; i++)
  {
    bullet1[i] = new Circle();
    bullet1check[i] = 0;
  }
  for(let i = 0; i < (bullet2Num); i++)
  {
    bullet2[i] = new Circle2();
    bullet2check[i] = 0;
  }
  for(let i = 0; i<enemyNum1; i++)
  {
    enemy1[i] = new Enemy1();
  }
    for (let i = 0; i < enemyNum2; i++)
  {
    enemy2[i] = new Enemy2();
  }
  for (let i = 0; i < enemyNum3; i++)
  {
    enemy3[i] = new Enemy3();
  }
  for (let i = 0; i < enemyNum4; i++)
  {  
    enemy4[i] = new Enemy4();
  }
}

function EndOfGame()
{
  if(USERHP<=0)
  {
    push();
    background(0);
    fill(255);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(width / 10);
    text("GAME OVER", width/2, height/2);
    textSize(width / 30);
    text("if you want to play the game once again, plz press R", width/2, height/2+20);
    pop();
  }  
  if(playcheck==0)
  {
    push();
    background(0);
    fill(210, 0, 100);
    ellipse(x, y, 50)
    fill(210, 255, 100);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize((width/7)-5, height);
    text("RESETY BUPER", width/2, height/2-200);
    textSize(width / 30);
    text("if you want to play the game", width/2, height/2-50);
    text("plz press the button", width/2, height/2-10);
    text("Move : ←↑↓→", width/2, height/2+80);
    text("Use Rullet(1) to make enemy big! : Z", width/2, height/2+110);
    text("Use Bullet(3) to get a high score!: X", width/2, height/2+140);
    text("Fast replay : R", width/2, height/2+170);
    text("Your Gool is get a 300 score", width/2, height/2+210);
    text("Good luck~!", width/2, height/2+250);
    pop();
    button.center();
    button.position(width/2-40, height/2+30);
    button.mousePressed(reset);
  }  
  if(SCORE>=300)
  {
    push();
    background(0);
    color(255,255,0);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(width / 10);
    text("CLEAR!", width/2, height/2);
    textSize(width / 30);
    text("if you want to play the game once again, plz press R", width/2, height/2+20);
    pop();
  }  
}