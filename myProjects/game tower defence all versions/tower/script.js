//  overlay
const overlay = $('#overlay');
const mapEntrence = $(".roadLeftEntrance");
let spotY = mapEntrence.offset().top;
let spotX = mapEntrence.offset().left;
//  button menu
const btnResume = $('.resume');
const btnPause = $('.pause');

//   button towers
const towers = $('#tower1,#tower2,#tower3');

//   tiles active to build tower (centermap)
const mapCenterTile = $('.mapCenter');

//     canvas
let canvas = document.querySelector('canvas');
//     canvas settings
canvas.width = 640;
canvas.height = 392;
let ctx = canvas.getContext("2d");
console.log(ctx);
//music https://www.youtube.com/watch?v=EQja4bK1k6c

// game
const game = $(".game");


//                               set      and      global
let minionHalfSize = 16;
let whichMinion = 0;

let minionsArray = [];
let minionHp = 32;
let waveSize = 5;
let minionsConstructed = false;

//   towers on map
let towersCoordinate = [];
let whichTower=0;
let choosenTower=null;

//       gold 
const startGold = 200;
let actualGold = startGold;
const gold = $('.goldAmount');

let coins; //on map

//                                           mouse
let mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
//                                           point in circle function
function pointInCircle(x, y, cx, cy, radius) {
    let distanceSquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distanceSquared <= radius * radius;
}
//                                           diagonal function
function diagonal(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}  
//                       delay() handmade
function pause(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
//                                            Gameover BloodScreen
function bloodScreen(){
    overlay.append('<div class="bloodScreen"></div>');
}

const btnGameover = $(".btnGameover");
btnGameover.click(bloodScreen);




//                                             Minion Constructor
let minionRunTime = 38; // 19 frames x 32px
function minionObj(leftOfMinion,topOfMinion,minionHp){
    this.x = leftOfMinion;
    this.y = topOfMinion;
    this.minionHp = minionHp;

    this.construct = function(){
        overlay.append('<div class="minion minion' + String(whichMinion) + '"></div>');
        this.minion = $(".minion" + whichMinion);
        
        this.minion.css({
            'left' : spotX,
            'top' : spotY,
            'animation-duration' : minionRunTime + "s"
        });
        spotX-=64;
        whichMinion+=1;
        minionRunTime+=4;
    }

    this.dead = function(){
        minionsArray.splice(this.whichMinion,1);
        this.minion.remove();
        overlay.append("<div style='left: " + this.x + "px; top: " + this.y + "px;' class='coin'></div>")
    }

    this.draw = function(){
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x + this.minionHp,this.y);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "red";
        ctx.stroke();
        
    }

    this.update = function(){
           this.x = this.minion.offset().left;
           this.y = this.minion.offset().top;
            if(this.minionHp<=0){
                this.dead();
                
                //append i stworzyc diva coin do zebrania 
                //to out $('.minionDefault').addClass('coin');
                //w tym miejscu $('.coin').css({top:topOfMinion,left:leftOfMinion});
            }
           
            
        this.draw();
    }
}
//                                                     choose tower
function chooseTower(){
    if(choosenTower==$(this).attr("id")){
        choosenTower=null;
    }else {choosenTower=$(this).attr("id");
}}
//                                    towers constructor and shooting function
function tower(x,y,dmgArea,dmgSize,dmgColor,dmg,towerType,whichTower){
    this.x = x;
    this.y = y;
    this.xReset = x;
    this.yReset = y;
    this.dmgArea = dmgArea;
    this.dmgSize = dmgSize;
    this.dmgColor = dmgColor;
    this.dmg = dmg;
    this.towerType = towerType;
    this.whichTower = whichTower;
    
    this.dx;
    this.dy;
    this.diag;
    this.frame = 1;
    this.whichFrame = 1;
    this.total;

    this.whichOne;
    this.targetElement = null;
    this.target = {
        x : null,
        y : null
    }
//draw
    this.shoot = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.dmgSize,0,Math.PI*2,false);
        ctx.strokeStyle=this.dmgColor;
        ctx.stroke(); 
    } 
//update   
this.update = function(){
    
        if(this.targetElement == null){
            // console.log(this.targetElement, "targetElement null");
            let targetsArray = $(".minion");
            // console.log(targetsArray, "targetsArray pobrane minionki");
            targeting:
            for (var i=0; i<targetsArray.length;i++){
                this.target.x = targetsArray[i].offsetLeft + minionHalfSize;
                this.target.y = targetsArray[i].offsetTop + minionHalfSize;
                // console.log(this.target.x, "x liczba");
    
                if(pointInCircle(this.target.x,this.target.y,this.x,this.y,this.dmgArea)){
    
                    // console.log(this.target.x, "x liczba");
                    this.targetElement = targetsArray[i];
                    this.whichOne = i;
                    break targeting;
                }
            }
        }

    if(this.targetElement != null){
       
        this.target.x = this.targetElement.offsetLeft + minionHalfSize;
        this.target.y = this.targetElement.offsetTop + minionHalfSize;
        // console.log(this.target.x, "x liczba namierzanie");
        // console.log(this.target.y, "y liczba namierzanie");


        if(pointInCircle(this.target.x, this.target.y,this.x,this.y,this.dmgArea)){
            // console.log("target is inside");
            this.dx=(this.target.x - this.x);
            this.dy=(this.target.y - this.y);
            
            this.diag = diagonal(this.dx,this.dy);
            this.frame = Math.round(this.diag);
            
            this.dx = (this.target.x - this.x)*(this.whichFrame/this.frame);
            this.dy = (this.target.y - this.y)*(this.whichFrame/this.frame);   

            // console.log(this.dx, "dx");
            // console.log(this.dy, "dy");
            
            this.total = (this.whichFrame/this.frame);
            if(this.total>=1){
                // for(let i=0; i<minionsArray.length;i++){
                //     console.log("hit", minionsArray[i].minionHp,this.dmg);
                // }
               
                // console.log(minionsArray[this.whichOne]);
                minionsArray[this.whichOne].minionHp -= this.dmg;
                if(minionsArray[this.whichOne].minionHp<=0){
                    this.targetElement = null;
                    targetsArray = $(".minion");
                    
            
                }
                this.whichFrame = 1;
                this.x = this.xReset;
                this.y = this.yReset;
            }else{
                this.x+=this.dx;
                this.y+=this.dy;
            }
            this.whichFrame++;

        }else{
            this.targetElement = null;
        }
    }

    this.shoot();
}
    
}
//                                                      ADDING TOWER
function buildTower(){
    if(choosenTower!=null){   
        if($(this).is(".road, .tower1, .tower2, .tower3") !=true) { 
            $(this).addClass(choosenTower);
            let towerOnMap = $(this);
                //set top, left of tower added
                let leftOfTowers = minionHalfSize + towerOnMap.offset().left;
                let topOfTowers = 12 + towerOnMap.offset().top;
                //settings towers
                let towerType;
                let towerName1 = "Archer", towerName2 = "Mage", towerName3 = "Artillery";
                let towerRad;
                let towerRad1 = 100, towerRad2 = 80, towerRad3 = 200;
                let dmgSize;
                let dmgSize1 = 1, dmgSize2 = 1.5, dmgSize3 = 0.5;
                let dmgColor;
                let dmgColor1 = "goldenrod", dmgColor2 = "blue", dmgColor3 = "black";
                let dmg;
                let dmg1 = .2, dmg2 = .23, dmg3 = .1;
                //set towerType
                if ($(this).hasClass('tower1')){
                    towerType = towerName1;
                    towerRad = towerRad1;
                    dmgSize = dmgSize1;
                    dmgColor = dmgColor1;
                    dmg = dmg1;
                }
                else if ($(this).hasClass('tower2')){
                    towerType = towerName2;
                    towerRad = towerRad2;
                    dmgSize = dmgSize2;
                    dmgColor = dmgColor2;
                    dmg = dmg2;
                }
                else if ($(this).hasClass('tower3')){
                    towerType = towerName3;
                    towerRad = towerRad3;
                    dmgSize = dmgSize3;
                    dmgColor = dmgColor3;
                    dmg = dmg3;
                }
                towersCoordinate.push(new tower(leftOfTowers,topOfTowers,towerRad,dmgSize,dmgColor,dmg,towerType,whichTower));
                whichTower++;
        }
    }     
}


// ~~!!!!!!!!!!!!!!!!
//            ustawic listener na najechanie na coin                                           gold select
function goldSelect(){
    console.log("took");
   $(this).remove().then(actualGold+=1)
}

//                                                    animate main loop
function animate(){
    $(".coin").hover(goldSelect);
    
      
    ctx.clearRect(0,0,innerWidth,innerHeight);
    gold.text(actualGold);  
  
    

    if(minionsConstructed==false){
        for (var i=0; i<waveSize+1;i++){
                minionsArray.push(new minionObj(spotX,spotY,minionHp));
                
                
        }
        for (var i=0; i<minionsArray.length;i++){
            
            minionsArray[i].construct();
        }
        minionsConstructed = true; 
    }

    for (var i=0; i<minionsArray.length;i++){
        minionsArray[i].update();
    }
    for (var i=0; i<towersCoordinate.length;i++){
       
        towersCoordinate[i].update();
    }
    
    requestAnimationFrame(animate);
}


animate();

//                                                     clicks
towers.click(chooseTower);
mapCenterTile.click(buildTower);



            
// function createMinions(){
//         $('div#overlay').append('<div class="minion minionDefault"></div>');
//             console.log('wild minion appear');  
//             leftOfMinion = minion.offset().left + minionHalfSize;
//             topOfMinion = minion.offset().top + minionHalfSize;
//             minionsArray.push(new minionObj(leftOfMinion,topOfMinion));
//             minion = $('.minion');
//             minionHp = 32;
//             minionAlive = true;
//             console.log(minionsArray);

//     }

// btnResume.click(function(){
   
//     createMinions();
// })



/*
//                                                        stop
function pause() {
        cancelAnimationFrame(requestId);
        animateSet=false;
}
//                                                        start
function start() {
    if(animateSet==false){
        requestAnimationFrame(animate);
        animateSet=true;
    }
}
*/
