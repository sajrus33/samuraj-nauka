
//  overlay
const overlay = $('body');
const mapEntrence = $(".roadLeftEntrance");
let spotY = 64; //mapEntrence.offset().top;
let spotX = 0; //mapEntrence.offset().left;
//  button menu
const btnResume = $('.resume');
const btnPause = $('.pause');
//   button towers
const towers = $('#tower1,#tower2,#tower3');
// button gameover
const btnGameover = $(".btnGameover");
//   tiles active to build tower (centermap)
const mapCenterTile = $('.mapCenter');

//     canvas 
const canvas = document.querySelector('#cnv');
const canvas2 = document.querySelector("#cnv2");
const canvas3 = document.querySelector("#cnv3");
const canvas4 = document.querySelector("#cnv4");

//     canvas settings
const canvasWidth = 640;
const canvasHeight = 320;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");

canvas2.width = canvasWidth;
canvas2.height = canvasHeight;
const ctx2 = canvas2.getContext("2d");

canvas3.width = canvasWidth;
canvas3.height = canvasHeight;
const ctx3 = canvas3.getContext("2d");

canvas4.width = canvasWidth;
canvas4.height = canvasHeight;
const ctx4 = canvas4.getContext("2d");
console.log(ctx, ctx2, ctx3, ctx4);

//  canvas offset
let canvasLeft = canvas4.offsetLeft;
let canvasTop = canvas4.offsetTop;
let canvasElements = [];
console.log(canvasLeft, canvasTop);
//  canvas clearer                                                                                                  FUNCTION
function cleanCanvas() {
    // for (let i = 0; i < ctxArray.length; i++) {
    //     ctxArray[i].clearRect(0, 0, innerWidth, innerHeight);
    // }
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx2.clearRect(0, 0, innerWidth, innerHeight);
    ctx3.clearRect(0, 0, innerWidth, innerHeight);
    ctx4.clearRect(0, 0, innerWidth, innerHeight);

}
//music https://www.youtube.com/watch?v=EQja4bK1k6c

//              map set
const mapHeight = 10;
const mapWidth = 20;
const tileWidth = 32;
const tileHeight = 32;
//                                    load textures and drawing maps

//map
const mapCenter = new Image();
mapCenter.src = "png/mapCenter.png";
const mapTop = new Image();
mapTop.src = "png/mapTop.png";
const mapLeft = new Image();
mapLeft.src = "png/mapLeft.png";
const mapRight = new Image();
mapRight.src = "png/mapRight.png";
const mapBottom = new Image();
mapBottom.src = "png/mapBottom.png";
const mapLeftTop = new Image();
mapLeftTop.src = "png/mapLeftTop.png";
const mapRightTop = new Image();
mapRightTop.src = "png/mapRightTop.png";
const mapLeftBottom = new Image();
mapLeftBottom.src = "png/mapLeftBottom.png";
const mapRightBottom = new Image();
mapRightBottom.src = "png/mapRightBottom.png";
//road
const roadLeftRight = new Image();
roadLeftRight.src = "png/roadLeftRight.png";
const roadBottomLeft = new Image();
roadBottomLeft.src = "png/roadBottomLeft.png";
const roadBottomRight = new Image();
roadBottomRight.src = "png/roadBottomRight.png";
const roadBottomTop = new Image();
roadBottomTop.src = "png/roadBottomTop.png";
const roadTopLeft = new Image();
roadTopLeft.src = "png/roadTopLeft.png";
const roadTopRight = new Image();
roadTopRight.src = "png/roadTopRight.png";
// maps drawing                                                                                                    FUNCTION
function drawMap() {
    let gameMap = [
        5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, //1
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //2
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //3
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //4
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //5
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //6
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //7
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //8
        2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, //9
        7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8 //10
    ]

    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            switch (gameMap[((y * mapWidth) + x)]) {
                case 0:
                    const backgroundCenter = ctx.createPattern(mapCenter, "repeat");
                    ctx.fillStyle = backgroundCenter;
                    break;

                case 1:
                    const backgroundTop = ctx.createPattern(mapTop, "repeat");
                    ctx.fillStyle = backgroundTop;
                    break;

                case 2:
                    const backgroundLeft = ctx.createPattern(mapLeft, "repeat");
                    ctx.fillStyle = backgroundLeft;
                    break;

                case 3:
                    const backgroundRight = ctx.createPattern(mapRight, "repeat");
                    ctx.fillStyle = backgroundRight;
                    break;

                case 4:
                    const backgroundBotttom = ctx.createPattern(mapBottom, "repeat");
                    ctx.fillStyle = backgroundBotttom;
                    break;

                case 5:
                    const backgroundLeftTop = ctx.createPattern(mapLeftTop, "repeat");
                    ctx.fillStyle = backgroundLeftTop;
                    break;

                case 6:
                    const backgroundRightTop = ctx.createPattern(mapRightTop, "repeat");
                    ctx.fillStyle = backgroundRightTop;
                    break;

                case 7:
                    const backgroundLeftBottom = ctx.createPattern(mapLeftBottom, "repeat");
                    ctx.fillStyle = backgroundLeftBottom;
                    break;

                case 8:
                    const backgroundRightBottom = ctx.createPattern(mapRightBottom, "repeat");
                    ctx.fillStyle = backgroundRightBottom;
                    break;

                default:

                    ctx.fillStyle = "blue";
            }
            ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
}
//                                                                                                                 FUNCTION
function drawRoad() {
    let gameMapRoad = [
        //1 left right
        //2 bottom left
        //3 bottom right
        //4 bottom top
        //5 top left
        //6 top right    
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //1
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0, 0, //2
        1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, //3
        0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 6, 1, 1, 2, 0, 0, 0, //4
        0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, //5
        0, 0, 0, 0, 0, 6, 1, 1, 1, 1, 1, 5, 0, 0, 0, 0, 4, 0, 0, 0, //6
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, //7
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, //8
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, //9
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 //10
    ]

    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            switch (gameMapRoad[((y * mapWidth) + x)]) {
                case 0:
                    ctx2.fillStyle = "transparent";
                    break;
                case 1:
                    const proadLeftRight = ctx.createPattern(roadLeftRight, "repeat");
                    ctx2.fillStyle = proadLeftRight;
                    break;

                case 2:
                    const proadBottomLeft = ctx.createPattern(roadBottomLeft, "repeat");
                    ctx2.fillStyle = proadBottomLeft;
                    break;

                case 3:
                    const proadBottomRight = ctx.createPattern(roadBottomRight, "repeat");
                    ctx2.fillStyle = proadBottomRight;
                    break;

                case 4:
                    const proadBottomTop = ctx.createPattern(roadBottomTop, "repeat");
                    ctx2.fillStyle = proadBottomTop;
                    break;

                case 5:
                    const proadTopLeft = ctx.createPattern(roadTopLeft, "repeat");
                    ctx2.fillStyle = proadTopLeft;
                    break;

                case 6:
                    const proadTopRight = ctx.createPattern(roadTopRight, "repeat");
                    ctx2.fillStyle = proadTopRight;
                    break;

                default:

                    ctx2.fillStyle = "blue";
            }
            ctx2.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
}
//              game
const game = $(".game");

//              set      and      global
let minionHalfSize = 16;
let whichMinion = 0;

let minionsArray = [];
let minionHp = 32;
let waveSize = 5;
let minionsConstructed = false;

//              towers on map
let towersCoordinate = [];
let whichTower = 0;
let choosenTower = null;

//              gold 
const startGold = 200;
let actualGold = startGold;
const gold = $('.goldAmount');

let coins; //elements on map

//                                            gold select       
gold.text(actualGold);

function actualizeGold(amount) {
    actualGold += amount;
}
//                                                                                                                 FUNCTION

function goldSelect() {
    console.log("took");
    $(this).remove();
    actualizeGold(10);
    gold.text(actualGold);
}
//                                                                                                                  FUNCTION
function goldListenerRef() {
    $(".coin").hover(goldSelect);
}
//                                            Gameover BloodScreen                                                  FUNCTION
function bloodScreen() {
    overlay.append('<div class="bloodScreen"></div>');
}
//                                           point in circle function                                               FUNCTION
function pointInCircle(x, y, cx, cy, radius) {
    let distanceSquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distanceSquared <= radius * radius;
}
//                                           diagonal function                                                      FUNCTION
function diagonal(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
//                       delay() handmade                                                                           FUNCTION
function pause(millis) {
    var date = new Date();
    var curDate = null;
    do {
        curDate = new Date();
    }
    while (curDate - date < millis);
}
let minionRunTime = 38; // 19 frames x 32px  bylo 38"!
//                                             Minion Constructor                                                                       FUNCTION
function minionObj(leftOfMinion, topOfMinion, minionHp) {

    this.x = leftOfMinion;
    this.y = topOfMinion;
    this.minionHp = minionHp;

    overlay.append('<div class="minion minion' + String(whichMinion) + '"></div>');

    this.minion = $(".minion" + whichMinion);

    this.minion.css({
        'left': spotX,
        'top': spotY,
        'animation-duration': minionRunTime + "s"
    });
    spotX -= 64;
    whichMinion += 1;
    minionRunTime += 4;

    this.dead = function () {
        minionsArray.splice(this.whichMinion, 1);
        this.minion.remove();
        overlay.append("<div style='left: " + this.x + "px; top: " + this.y + "px;' class='coin'></div>");
        goldListenerRef();
    }
    this.draw = function () {
        ctx3.beginPath();
        ctx3.moveTo(this.x, this.y);

        ctx3.lineTo(this.x + this.minionHp, this.y);
        ctx3.lineWidth = 2.5;
        ctx3.strokeStyle = "red";
        ctx3.stroke();
    }
    this.update = function () {
        this.x = this.minion.offset().left;
        this.y = this.minion.offset().top;

        // if (this.minionHp <= 0) {
        //     this.dead();
        // }

        this.draw();
    }
}
//                                                     choose tower                                                 FUNCTION
function chooseTower() {
    if (choosenTower == $(this).attr("id")) {
        choosenTower = null;
    } else {
        choosenTower = $(this).attr("id");
    }
}
//                                    towers constructor and shooting function                                      FUNCTION
function tower(x, y, dmgArea, dmgSize, dmgColor, dmg, towerType, whichTower) {
    x += 16;
    y += 16;

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
        x: null,
        y: null
    }
    //draw
    this.shoot = function () {
        ctx4.beginPath();
        ctx4.arc(this.x, this.y, this.dmgSize, 0, Math.PI * 2, false);
        ctx4.strokeStyle = this.dmgColor;
        ctx4.stroke();
    }
    //update   
    this.update = function () {

        if (this.targetElement == null) {
            // console.log(this.targetElement, "targetElement null");
            let targetsArray = $(".minion");
            // console.log(targetsArray, "targetsArray pobrane minionki");
            targeting:
                for (var i = 0; i < targetsArray.length; i++) {
                    this.target.x = targetsArray[i].offsetLeft + minionHalfSize;
                    this.target.y = targetsArray[i].offsetTop + minionHalfSize;
                    // console.log(this.target.x, "x liczba");

                    if (pointInCircle(this.target.x, this.target.y, this.x, this.y, this.dmgArea)) {

                        // console.log(this.target.x, "x liczba");
                        this.targetElement = targetsArray[i];
                        this.whichOne = i;
                        break targeting;
                    }
                }
        }

        if (this.targetElement != null) {

            this.target.x = this.targetElement.offsetLeft + minionHalfSize;
            this.target.y = this.targetElement.offsetTop + minionHalfSize;
            // console.log(this.target.x, "x liczba namierzanie");
            // console.log(this.target.y, "y liczba namierzanie");
            if (pointInCircle(this.target.x, this.target.y, this.x, this.y, this.dmgArea)) {
                // console.log("target is inside");
                this.dx = (this.target.x - this.x);
                this.dy = (this.target.y - this.y);

                this.diag = diagonal(this.dx, this.dy);
                this.frame = Math.round(this.diag);

                this.dx = (this.target.x - this.x) * (this.whichFrame / this.frame);
                this.dy = (this.target.y - this.y) * (this.whichFrame / this.frame);
                // console.log(this.dx, "dx");
                // console.log(this.dy, "dy");
                this.total = (this.whichFrame / this.frame);
                if (this.total >= 1) {
                    // for (let i = 0; i < minionsArray.length; i++) {
                    //     console.log("hit", minionsArray[i].minionHp, this.dmg);
                    // }
                    // console.log(minionsArray[this.whichOne]);
                    if (minionsArray[this.whichOne] != undefined) {
                        minionsArray[this.whichOne].minionHp -= this.dmg;
                        if (minionsArray[this.whichOne].minionHp <= 0) {
                            minionsArray[this.whichOne].dead();
                            this.targetElement = null;
                            targetsArray = $(".minion");
                        }
                        this.whichFrame = 1;
                        this.x = this.xReset;
                        this.y = this.yReset;
                    }


                } else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
                this.whichFrame++;

            } else {
                this.targetElement = null;
            }
        }

        this.shoot();
    }

}
//                                                      ADDING TOWER                                                FUNCTION
function buildTower(yPos, xPos) {
    yPos -= 16; //center pos 
    xPos -= 16; //center pos 
    if (choosenTower != null) {
        if (true) {
            overlay.append("<div class = '" + choosenTower + "' style = 'left:" + xPos + "px; top:" + yPos + "px;' ></div>");
            //set top, left of tower added
            let leftOfTowers = xPos;
            let topOfTowers = yPos;
            //settings towers
            let towerType,
                towerName1 = "Archer",
                towerName2 = "Mage",
                towerName3 = "Artillery",
                towerRad,
                towerRad1 = 100,
                towerRad2 = 80,
                towerRad3 = 200,
                dmgSize,
                dmgSize1 = 1,
                dmgSize2 = 1.5,
                dmgSize3 = 0.5,
                dmgColor,
                dmgColor1 = "red",
                dmgColor2 = "blue",
                dmgColor3 = "black",
                dmg,
                dmg1 = .2,
                dmg2 = .23,
                dmg3 = .12;

            //set towerType
            switch (choosenTower) {
                case "tower1":
                    towerType = towerName1;
                    towerRad = towerRad1;
                    dmgSize = dmgSize1;
                    dmgColor = dmgColor1;
                    dmg = dmg1;
                    break;

                case "tower2":
                    towerType = towerName2;
                    towerRad = towerRad2;
                    dmgSize = dmgSize2;
                    dmgColor = dmgColor2;
                    dmg = dmg2;
                    break;
                case "tower3":
                    towerType = towerName3;
                    towerRad = towerRad3;
                    dmgSize = dmgSize3;
                    dmgColor = dmgColor3;
                    dmg = dmg3;
                    break;
                default:
                    console.log("tower building gone wrong");
                    break;
            }
            towersCoordinate.push(new tower(leftOfTowers, topOfTowers, towerRad, dmgSize, dmgColor, dmg, towerType, whichTower));
            whichTower++;
        }
    }
}
//                                                   main loop functions                                            FUNCTION
function createMinions() {
    if (minionsConstructed == false) {
        for (var i = 0; i < waveSize + 1; i++) {
            minionsArray.push(new minionObj(spotX, spotY, minionHp));
        }
        // for (var i=0; i<minionsArray.length;i++){    
        //     minionsArray[i].construct();
        // }
        // minionsConstructed = true;
    }
}
//                                                                                                                  FUNCTION
function updateAll() {
    for (var i = 0; i < minionsArray.length; i++) {
        minionsArray[i].update();
    }
    for (var i = 0; i < towersCoordinate.length; i++) {
        towersCoordinate[i].update();
    }
}
//                                                    animate main loop                                             FUNCTION
function animate() {
    cleanCanvas();
    drawMap();
    drawRoad();


    // createMinions();
    updateAll();

    requestAnimationFrame(animate);
}
animate();
//                                                     clicks
function getPosOnCanvas(event) {
    let xPos = event.pageX; // - canvas.left 
    let yPos = event.pageY; // - canvas.top
    console.log(yPos, xPos);
    buildTower(yPos, xPos);// if its requested
    // canvasElements.forEach(checkCanvasElements);
}

// pozniej do menu klikania w canvas ofc
function checkCanvasElements(element) {
    if (yPos > element.top &&
        yPos < element.top + element.height &&
        xPos > element.left &&
        xPos < element.left + element.width) {
        console.log(xPos, yPos, "inside of element");
    }
}



canvas4.addEventListener("click", getPosOnCanvas, false); //false dodac w parametrach sprawdz!
towers.click(chooseTower);
// mapCenterTile.click(buildTower);
btnGameover.click(bloodScreen);
btnResume.click(createMinions);

















































// //                                                      ADDING TOWER                                                FUNCTION
// function buildTower() {
//     if (choosenTower != null) {
//         if ($(this).is(".road, .tower1, .tower2, .tower3") != true) {
//             $(this).addClass(choosenTower);
//             let towerOnMap = $(this);
//             //set top, left of tower added
//             let leftOfTowers = minionHalfSize + towerOnMap.offset().left;
//             let topOfTowers = 12 + towerOnMap.offset().top;
//             //settings towers
//             let towerType;
//             let towerName1 = "Archer",
//                 towerName2 = "Mage",
//                 towerName3 = "Artillery";
//             let towerRad;
//             let towerRad1 = 100,
//                 towerRad2 = 80,
//                 towerRad3 = 200;
//             let dmgSize;
//             let dmgSize1 = 1,
//                 dmgSize2 = 1.5,
//                 dmgSize3 = 0.5;
//             let dmgColor;
//             let dmgColor1 = "goldenrod",
//                 dmgColor2 = "blue",
//                 dmgColor3 = "black";
//             let dmg;
//             let dmg1 = .2,
//                 dmg2 = .23,
//                 dmg3 = .1;
//             //set towerType
//             if ($(this).hasClass('tower1')) {
//                 towerType = towerName1;
//                 towerRad = towerRad1;
//                 dmgSize = dmgSize1;
//                 dmgColor = dmgColor1;
//                 dmg = dmg1;
//             } else if ($(this).hasClass('tower2')) {
//                 towerType = towerName2;
//                 towerRad = towerRad2;
//                 dmgSize = dmgSize2;
//                 dmgColor = dmgColor2;
//                 dmg = dmg2;
//             } else if ($(this).hasClass('tower3')) {
//                 towerType = towerName3;
//                 towerRad = towerRad3;
//                 dmgSize = dmgSize3;
//                 dmgColor = dmgColor3;
//                 dmg = dmg3;
//             }
//             towersCoordinate.push(new tower(leftOfTowers, topOfTowers, towerRad, dmgSize, dmgColor, dmg, towerType, whichTower));
//             whichTower++;
//         }
//     }
// }
// //                                           mouse
// let mouse = {
//     x: undefined,
//     y: undefined
// }
// window.addEventListener('mousemove', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
// });

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