var bg1
var tom
var jerry 
var gardenimg

function preload() {
    //load the images here
    catimg = loadAnimation("cat2.png","cat3.png")
    catstand = loadImage("cat4.png")
    catsleep = loadImage("cat1.png")
    gardenimg = loadImage("garden.png")
    mouseimg = loadAnimation("mouse2.png","mouse3.png")
    mouseteaser = loadImage("mouse1.png")
    mousegot = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000, 800)
    //create tom and jerry sprites here
    bg1 = CreateSprite(1000,800)
    bg1.addImage(gardenimg);
    
   

    
 
}

function draw() {

background(1);
drawSprites();


    //Write condition here to evalute if tom and jerry collide

  
}


function keyPressed(){

  //For moving and changing animation write code here


}
