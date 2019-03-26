//  button menu
const btnResume = $('.resume');
const btnPause = $('.pause');

//   button towers
const towers = $('#tower1,#tower2,#tower3');

//   tiles active to build tower (centermap)
const mapCenterTile = $('.mapCenter');

//                               set      and      global
let minionHalfSize = 16;
let minion = $(".minion");

let minionHp = 32;
let minionAlive = true;

//   towers on map
let towersCoordinate = [];
let whichTower=0;
let choosenTower=null;

//     canvas
let canvas = document.querySelector('canvas');
canvas.width = 640;
canvas.height = 392;
let ctx = canvas.getContext("2d");
console.log(ctx);
//muzyka https://www.youtube.com/watch?v=EQja4bK1k6c

//       gold 
const startGold = 200;
let actualGold = startGold;
const gold = $('.goldAmount');

coinOnMap = false;

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


//                                             Minion Constructor
function minionObj(leftOfMinion,topOfMinion){
    this.x = leftOfMinion;
    this.y = topOfMinion;

    this.draw = function(){
        if(minionAlive){
        this.x = minion.offset().left;
        this.y = minion.offset().top;

        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x + minionHp,this.y);
        if(minionHp<=0){
            leftOfMinion = minion.offset().left + minionHalfSize;
            topOfMinion = minion.offset().top + minionHalfSize;

            minion.removeClass('minion');
            $('.minionDefault').addClass('coin');
            $('.coin').css({top:topOfMinion,left:leftOfMinion});
            minionAlive = false;
            coinOnMap = true;

        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();
        }
        
    }
}


//                                                     choose tower
function chooseTower(){
    if(choosenTower==$(this).attr("id")){
        choosenTower=null;
    }else {choosenTower=$(this).attr("id");
}}

//                                    towers constructor and shooting function
function tower(x,y,dmgArea,dmgSize,dmg,towerType,whichTower){

    this.x = x;
    this.y = y;
    this.xReset = x;
    this.yReset = y;
    
    this.dmgArea = dmgArea;
    this.dmgSize = dmgSize;
    this.dmg = dmg;

    this.towerType = towerType;
    this.whichTower = whichTower;

    //this.target = minionek actual,die,another minionek actual
    this.dx;
    this.dy;

    this.diag;
    this.frame = 1;
    this.whichFrame = 1;
    this.total;
//draw
    this.shoot = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.dmgSize,0,Math.PI*2,false);
        ctx.strokeStyle="blue";
        ctx.stroke();
    } 
//update   
    this.update = function(){
        
        leftOfMinion = minion.offset().left + minionHalfSize;
        topOfMinion = minion.offset().top + minionHalfSize;
       
        if(pointInCircle(leftOfMinion,topOfMinion,this.x,this.y,this.dmgArea)&&minionAlive){
            this.dx=(leftOfMinion-this.x);
            this.dy=(topOfMinion-this.y);
            
            this.diag = diagonal(this.dx,this.dy);
            this.frame = Math.round(this.diag);
            
            this.dx = (leftOfMinion - this.x)*(this.whichFrame/this.frame);
            this.dy = (topOfMinion - this.y)*(this.whichFrame/this.frame);           
            
            this.total = (this.whichFrame/this.frame);
            if(this.total>=1){

                minionHp -=this.dmg;
                this.whichFrame = 1;
                this.x = this.xReset;
                this.y = this.yReset;
                
               

            }else{
                this.x+=this.dx;
                this.y+=this.dy;
                }
            this.whichFrame++;
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
                let towerType;
                let towerRad;
                let dmgSize;
                let dmgSize1 = 1, dmgSize2 = 1.5, dmgSize3 = 0.5;
                let towerName1 = "Archer", towerName2 = "Mage", towerName3 = "Artillery";
                let towerRad1 = 100, towerRad2 = 80, towerRad3 = 200;
                let dmg;
                let dmg1 = .2, dmg2 = .23, dmg3 = .1;
                //set towerType
                if ($(this).hasClass('tower1')){
                    towerType = towerName1;
                    towerRad = towerRad1;
                    dmgSize = dmgSize1;
                    dmg = dmg1;
                }
                else if ($(this).hasClass('tower2')){
                    towerType = towerName2;
                    towerRad = towerRad2;
                    dmgSize = dmgSize2;
                    dmg = dmg2;
                }
                else if ($(this).hasClass('tower3')){
                    towerType = towerName3;
                    towerRad = towerRad3;
                    dmgSize = dmgSize3;
                    dmg = dmg3;
                }

                //adding data of tower to array obj
                towersCoordinate.push(new tower(leftOfTowers,topOfTowers,towerRad,dmgSize,dmg,towerType,whichTower));
                
                //next tower
                whichTower++;
                
                
        }
    }     
}


let minionsArray = [];
leftOfMinion = minion.offset().left;
topOfMinion = minion.offset().top;
minionsArray.push(new minionObj(leftOfMinion,topOfMinion));

//                                                       gold select
function goldSelect(){
    if(minionAlive==false&&coinOnMap){
        
        const $coin = $('.coin');
        let middleOfCoin = 8;
        let leftOfCoin = $coin.offset().left + middleOfCoin;
        let topOfCoin = $coin.offset().top + middleOfCoin;
        let distanceToCatchCoin = 16;
        if(    mouse.x - leftOfCoin + middleOfCoin <distanceToCatchCoin 
            && mouse.x - leftOfCoin + middleOfCoin > -distanceToCatchCoin
            && mouse.y - topOfCoin + middleOfCoin < distanceToCatchCoin
            && mouse.y - topOfCoin + middleOfCoin > -distanceToCatchCoin){
                console.log('we are in');
                $coin.removeClass('minionDefault');
                $coin.removeClass('coin');
                actualGold+=10;
                coinOnMap = false;
        }
    }
}
//                                                    animate main loop
function animate(){
   
    goldSelect();
    gold.text(actualGold);    
    ctx.clearRect(0,0,innerWidth,innerHeight);
  
    for (var i=0; i<towersCoordinate.length;i++){
       
        towersCoordinate[i].update();
    }
    for (var i=0; i<minionsArray.length;i++){
        minionsArray[i].draw();
    }
    
    requestAnimationFrame(animate);
}

animate();

//                                                     clicks
towers.click(chooseTower);
mapCenterTile.click(buildTower);

            
function createMinions(){
        $('div#overlay').append('<div class="minion minionDefault"></div>');
            console.log('wild minion appear');  
            leftOfMinion = minion.offset().left + minionHalfSize;
            topOfMinion = minion.offset().top + minionHalfSize;
            minionsArray.push(new minionObj(leftOfMinion,topOfMinion));
            minion = $('.minion');
            minionHp = 32;
            minionAlive = true;
            console.log(minionsArray);

    }

btnResume.click(function(){
   
    createMinions();
})



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
