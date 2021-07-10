//Create variables here
var food
var gameState="hungry"

var bedroomImg,gardenImg,washroomImg

function preload(){
	//load images here
  dogHappy=loadImage("images/dogImg.png")
  dogSad=loadImage("images/dogImg1.png")
  dogEating=loadImage("images/eating.png")
  bg = loadImage("images/PHOTO1.jpg");
  //milk1=loadImage("image/milk.jpg")
  
  bedroomImg= loadImage("images/Bed Room.png")
  gardenImg= loadImage("images/Garden.png")
  washroomImg= loadImage("images/Wash Room.png")
}

function setup() {
	createCanvas(1300, 700);
  
  database= firebase.database()


  database.ref('food').on("value",readPosition)
  milk1=new Food()
  milk1.getfeedTime()

  database.ref('gameState').on("value",(data)=>{
    gameState=data.val()
  })


  dog=createSprite(1090,500,50,50)
  dog.addImage(dogHappy)
  dog.scale=0.5

  bathButton =createButton ("i want to take bath")
  bathButton.position(400,200)

  sleepButton= createButton ("Sleep")
  sleepButton.position(530,200)

  playButton=createButton ("Play")
  playButton.position(600,200)

  hungryButton=createButton ("hungry")
  hungryButton.position(650,200)

}


function draw() {  
background(bg)
   drawSprites();
  
 textSize(40)
 textFont("Broadway");
   fill("yellow");
   stroke("red");
   strokeWeight(5);
  text("Last fed at :  "+ milk1.feedtime , 50,50)
  milk1.buttons()
  milk1.milkImg()
  

  bathButton.mousePressed(()=>{
    gameState="bathing"
  })

  sleepButton.mousePressed(()=>{
    gameState="sleeping"
  })


  playButton.mousePressed(()=>{
    gameState="playing"
  })

  hungryButton.mousePressed(()=>{
    gameState="hungry"
  })

  currentTime= hour()

 if(gameState === "playing"){
   milk1.updateState("playing")
    milk1.garden()
  }

else if(gameState=== "sleeping"){
milk1.updateState("sleeping")
  milk1.bedRoom()
}

else if(gameState=== "bathing"){
 milk1.updateState("bathing")
  milk1.washRoom()
}



else if (gameState === "hungry"){
  milk1.updateState("hungry")
}


  if(gameState !== 'hungry'){
    milk1.button1.hide()
    milk1.button2.hide()
   // dog.remove()
  }
    else{
      milk1.button1.show()
      milk1.button2.show()


    //  dog.addImage(dogSad)
     // dog.scale=0.2

    }
  


   if(food===0){
    dog.addImage(dogSad)
    dog.scale=0.5
   }

  

   
  
   
}

function readPosition(data){

  food=data.val()
}





function writeStock(data){
    database.ref('/').set({
      food:data,
      feedtime:hour()
      
    })

}

