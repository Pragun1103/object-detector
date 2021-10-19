status="";
function preload(){
    bottle=loadImage("Bottles.png");
}
function setup(){
    canvas=createCanvas(650,450);
    canvas.center();
    Detectobjects=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("Images").innerHTML="Objected Detected: Detecting";
}
function modeloaded()
{
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(bottle,gotresult);
}
function gotresult(error,result){
    if(error){
        console.error(error);
    }
    console.log(result); 
    }
    
    function draw(){
        image(bottle,0,0,650,450);
        fill("#00e5ff");
        stroke("#000000")
       
    }