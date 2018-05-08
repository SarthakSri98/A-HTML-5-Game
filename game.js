
var canvas = document.getElementById("canvas");
	  var ctx = canvas.getContext('2d');
//declare the variables
var b; var moveL; var moveR; var score = 0;
var x = 150;
var y = 150;
var vx = 6;
var vy = 5;
var ax = 2;
var ay = 2;
var color = ['black'];
var ctx;

//animate it
var clk = document.getElementById('canvas');
clk.addEventListener("click",init);
function init()
{   
    b = setInterval(draw,10);
}
//onKeydown
function onKeydown(event){
  if(event.keyCode === 37)  moveL = true;
  if(event.keyCode === 39)  moveR = true;
}

//onKeyup
function onKeyup(event){
  if(event.keyCode === 37)  moveL = false;
  if(event.keyCode === 39)  moveR = false;
}
//now setting up the keydown and keyup events
document.onkeydown = onKeydown;
document.onkeyup = onKeyup;
//function for bounce and paddle moving
function bounce()
{
//direction change   
if( y+vy+10<0)
  vy = -vy;
else if(y+vy-10>400)
  {
    if(x>paddleX && x<paddleX+paddleW)
     { vy=-vy;
      score = score+100;
      //score updation
      document.getElementById('score').innerHTML = "Score:         "+score;
     }
    else{
      //game over
      clearInterval(b);
      $('#btn').removeClass('hide');
      $('#btn').addClass('btnAnim');
      $('p').addClass('hide');
      document.getElementById('score').innerHTML = "Your score is:         "+score;
      document.getElementById('head').innerHTML = 'Hit the button to play again';
      
    }
  }
if(x+vx-10>500 || x+vx+10<0)  
  vx = -vx;
//keyboard movements
  if(moveL)
    paddleX -= 5;
  if(moveR)
    paddleX += 5;
}  //function bounce ends
//for the button to play again
var btn = document.getElementById('btn');
btn.addEventListener("click",init1);
//function for initialising the game again
function init1()
{
// all variables has been initialised again as the game has been restarted
var random = Math.floor ( Math.random() * 300);
 x = random;
 y = 20;
 vx = 6;
 vy = 5;
 ax = 2;
 ay = 2;
 score = 0;
  $('p').removeClass('hide');
  document.getElementById('score').innerHTML = "Score:         "+score;
    b = setInterval(draw,10);
  $('#btn').addClass('hide');
 init_paddle();
}
//draw the circle and the paddle
function draw()
{
ctx.clearRect(0,0,500,500); 
ctx.fillStyle = color[Math.floor(Math.random()*20)];	 
ctx.beginPath();
ctx.arc(x,y,10,0,2*Math.PI);
ctx.fillRect(paddleX,400-paddleH,paddleW,paddleH);
ctx.fill();
 x += vx;
 y += vy;
 bounce();
}
//creation of the paddle
var paddleX;
var paddleH;
var paddleW;
function init_paddle(){
    paddleX = 400;
    paddleH = 10;
    paddleW = 75;
 }
init_paddle();
