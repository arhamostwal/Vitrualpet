//Create variables here
var dog,happydog,milk=0

function preload()
{
  //load images here
  happydog=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
 dog = createSprite(250,250,10,20)
dog.addImage(happydog)
dog.scale=0.1;
dogfood = database.ref('food/milk')
dogfood.on("value",readStock);
}



function draw() {  
 background ("green")

  drawSprites();
  //add styles here
  text("Food remaining : "+milk,170,200);

}

function readStock(data){
milk = data.val()
}

