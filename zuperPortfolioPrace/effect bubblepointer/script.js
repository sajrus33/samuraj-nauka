var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
//width height canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//mouse obj
var mouse = {
    x: undefined,
    y: undefined
}
//MOUSE CATCHER
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("dzuaka");

    
})

// DRAWING
var circleArray = [];
var circlesQuantity =800;
//size
var maxRadius = 50;
var minRadius = 3;
//tempo
var growTempo = 2;
var shrinkTempo = 2.5;
var opacityGrowTempo = 0.1;
var opacityShrinkTempo = 0.1;
//random colors
var colorArray = [
  /*  '#FF530D',
    '#E82C0C',
    '#FF0000',
    '#E80C7A',
    '#FF0DFF'*/
    '#FFC100',
    '#E8850B',
    '#FF4400',
    '#E80C17',
    '#FC0DFF'
]

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius = radius;
    
  
//draw
    this.draw = function(){
        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);

        c.fillStyle = this.color;
        c.globalAlpha = .1;
        c.fill();
    } 
//update   
    this.update = function(){
        if(this.x + this.radius >innerWidth || 
            this.x - this.radius < 0){
            this.dx =-this.dx;
        }
        if(this.y + this.radius >innerHeight || 
            this.y - this.radius < 0){
            this.dy =-this.dy;
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

        if(mouse.x - this.x <50 
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y < 50
            && mouse.y - this.y > -50){
               
                if(this.radius < maxRadius){
                    this.radius += growTempo;
                }
            
        }else if(this.radius > minRadius) {
            this.radius -= shrinkTempo;
            
        }
        
        this.draw();
    }
}

for(var i =0; i<circlesQuantity; i++){
    var x = Math.random() * (innerWidth - radius *2) + radius;
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius =Math.random() * 3 +1;
    
    
    
    circleArray.push(new Circle(x,y,dx,dy,radius));  
}

function init(){

}

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);
  

    for (var i=0; i<circleArray.length;i++){
        circleArray[i].update();
    }

}

animate();