class Food{
constructor(){
    this.milkImage= loadImage("images/milk.jpg")
    this.feedtime
}

    buttons(){

        this.button1= createButton("Feed The Dog")
        this.button1.position(800,80)

        

        this.button2= createButton("Add Food")
        this.button2.position(900,80)

       


        

if(food>0){
        this.button1.mousePressed(()=>{
            food--
            writeStock(food)
        })
        


          }
        
          this.button2.mousePressed(()=>{
            food++
            writeStock(food)
            dog.addImage(dogEating)
        })
        
       
       
   }



   milkImg(){
       var newX=0   
       for (var i=0 ; i<food; i++){
           image (this.milkImage ,newX,500,50,100)
           newX=newX+60
       }
   }

   getfeedTime(){
    database.ref('feedtime').on("value",(data)=>{
        this.feedtime=data.val()
    })
   }
   
   updateState(state){
       database.ref('/').update({
            gameState:state
       })
   }







   bedRoom(){
    background(bedroomImg)
   }





   washRoom(){
    background(washroomImg)
   }




   garden(){
    background(gardenImg)
   }






}