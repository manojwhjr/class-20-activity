var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  obj3= createSprite(600, 300, 50, 80);
  obj3.shapeColor="green";
}

function draw() {
  background(255,255,255);  
 console.log(movingRect.x-fixedRect.x)
movingRect.x = mouseX
movingRect.y = mouseY
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor ="green";
  
  }
  if (isTouching(obj3,movingRect)){
    obj3.shapeColor = "red";
    movingRect.shapeColor = "red";
    }
    else{
    obj3.shapeColor = "green";
    movingRect.shapeColor ="green";
    
    }
      

drawSprites();
}

function isTouching(obj1,obj2){

//colission detection algorithm says that whenever two objects collide
//the distance within them will be the sum of their half of the width
if(obj1.x-obj2.x < obj1.width/2 + obj2.width/2 && 
  obj2.x-obj1.x < obj1.width/2 + obj2.width/2 &&
  obj1.y-obj2.y < obj1.height/2 + obj2.height/2 && 
  obj2.y-obj1.y < obj1.height/2 + obj2.height/2){
return true

}
else{
return false

}



}
