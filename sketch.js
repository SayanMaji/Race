var hypnoticBall, database;
var position;
var playerCount =0;
var game1;
var player,form;
var gameState =0;
var database;
var state
var allplayers;



function setup(){
  database = firebase.database();
  game1 = new Game();
  game1.getState();
  game1.start();
  
}

function draw(){
  background("white");
  text(mouseX + "," + mouseY, mouseX + 5, mouseY - 5);
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState=== 1){
    game1.play();
  }
  
   
  
}

