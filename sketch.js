const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

var challenge1;
var challenge2;
var forms;
var gameState=0;
var clock1,clock2,clock3,clock4,clock5,clock6,clock7,clock8;
var clock=8;
var score=0;
function preload(){

}
function setup(){
createCanvas(1350,640);
form=new Form();
challenge1=new Challenge1();
challenge2=new Challenge2();
}
function draw(){
background("white");
if(gameState===0){
    form.display();
}else if(gameState===1){
    challenge1.display();
}else if(gameState===2){
    challenge2.display();
}
}