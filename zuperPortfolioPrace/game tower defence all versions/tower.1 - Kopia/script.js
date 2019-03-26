//constants OBJECT
const constants = {
    //  overlay
    mapEntrence: $(".roadLeftEntrance"),
    btnMenu: $(".menuOpen"),
    towerMenu: $(".gameMenu"),
    btnResume: $('.resume'),
    btnPause: $('.pause'),
    //              game
    game: $(".game"),
    //audio
    //   button towers
    towers: $('#tower1,#tower2,#tower3'),
    // button gameover
    btnGameover: $(".btnGameover"),
    //   tiles active to build tower (centermap)
    mapCenterTile: $('.mapCenter'),
    //     canvas 
    canvas: document.querySelector('#cnv'),
    canvas2: document.querySelector("#cnv2"),
    canvas3: document.querySelector("#cnv3"),
    canvas4: document.querySelector("#cnv4"),
    //     canvas settings
    canvasWidth: 640,
    canvasHeight: 320,

    init: function () {
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this.canvas2.width = this.canvasWidth;
        this.canvas2.height = this.canvasHeight;

        this.canvas3.width = this.canvasWidth;
        this.canvas3.height = this.canvasHeight;

        this.canvas4.width = this.canvasWidth;
        this.canvas4.height = this.canvasHeight;
    },
    listenerFun: {
        //                                                                                                                 FUNCTION
        goldSelect: function () {
            // console.log("took");

            $(this).remove();
            let coinSound = new Audio("audio/coinSound.wav");
            coinSound.play();
            goldObj.actualizeGold(minionSet.prize);
        },
        //                                                                                                                  FUNCTION
        goldListenerRef: function () {
            $(".coin").hover(this.goldSelect);
        },
        //                                            Gameover BloodScreen                                                  FUNCTION
        bloodScreen: function () {
            constants.overlay.append('<div class="bloodScreen"></div>');
        }
    }
}

//              pre settings for minions
let minionSet = {
    minionHalfSize: 16,
    whichMinion: 0,
    minionsArray: [],
    minionHp: 32,
    prize: 10,
    waveSize: [10, 15, 13, 11, 22],
    minionsConstructed: false,
    minionRunTime: 90 // 19 frames x 32px   it was 38bro
}
//              pre settings for towers
let towerSet = {
    towersCoordinate: [],
    whichTower: 0,
    choosenTower: null,
    towerMenuOpened: false,
    //  check place for building posY posX 
    checkBuildPos: function (xPos, yPos) {
        let cnvHeight = constants.canvas.height;
        let cnvWidth = constants.canvas.width;
        let distance = 32;

        console.log(overlayOffset);
        if (xPos > overlayOffset.left + distance &&
            xPos < overlayOffset.left + cnvWidth - distance &&
            yPos > overlayOffset.top + distance &&
            yPos < overlayOffset.top + cnvHeight - distance) {
            return true;
        } else {
            return false;
        }
    },
    // show/hide towers Menu                                                FUNCTION 
    toggleTowerMenu: function () {
        if (this.towerMenuOpened) {
            console.log("otworzone");
            constants.towerMenu.css({
                'display': "none"
            });
            this.towerMenuOpened = false;
        } else {
            constants.towerMenu.css({
                'display': "flex"
            });
            console.log("niotworzone");

            this.towerMenuOpened = true;
        }
    }

}
let overlay = $('.gameWrapper');

//  canvas offset
let overlayOffset = {
    left: overlay.offset().left,
    top: overlay.offset().top,

    reSizeOffset: function () {
        overlayOffset.left = overlay.offset().left;
        overlayOffsettop = overlay.offset().top;
        console.log("we got brand new coo for ur overlay my lord!", this.left, overlayOffset);
    }
    // canvasElements: []
}
// context OBJECT
let context = {
    ctx: constants.canvas.getContext("2d"),
    ctx2: constants.canvas2.getContext("2d"),
    ctx3: constants.canvas3.getContext("2d"),
    ctx4: constants.canvas4.getContext("2d"),
    //  canvas clearer                                                                                                  FUNCTION
    cleanCanvas: function () {
        this.ctx.clearRect(constants.canvas.offsetLeft, constants.canvas.offsetTop, innerWidth, innerHeight);
        this.ctx2.clearRect(constants.canvas2.offsetLeft, constants.canvas2.offsetTop, innerWidth, innerHeight);
        this.ctx3.clearRect(constants.canvas3.offsetLeft, constants.canvas3.offsetTop, innerWidth, innerHeight);
        this.ctx4.clearRect(constants.canvas4.offsetLeft, constants.canvas4.offsetTop, innerWidth, innerHeight);
    },
    ctxCheck: function () {
        console.log(this.ctx, this.ctx2, this.ctx3, this.ctx4);
    }
    //music https://www.youtube.com/watch?v=EQja4bK1k6c
}

//              map set
const mapSet = {
    mapHeight: 10,
    mapWidth: 20,
    tileWidth: 32,
    tileHeight: 32,
    //map
    mapCenter: new Image(),
    mapTop: new Image(),
    mapLeft: new Image(),
    mapRight: new Image(),
    mapBottom: new Image(),
    mapLeftTop: new Image(),
    mapRightTop: new Image(),
    mapLeftBottom: new Image(),
    mapRightBottom: new Image(),
    //road
    roadLeftRight: new Image(),
    roadBottomLeft: new Image(),
    roadBottomRight: new Image(),
    roadBottomTop: new Image(),
    roadTopLeft: new Image(),
    roadTopRight: new Image(),
    // adds
    mapTree1: new Image(),
    mapTree2: new Image(),
    mapTree3: new Image(),
    mapDiamond: new Image(),
    mapStone: new Image(),
    //minion
    minion: new Image(),
    //                                    load textures and drawing maps
    loadMapImages: function () {
        //map
        this.mapCenter.src = "png/mapCenter.png";
        this.mapTop.src = "png/mapTop.png";
        this.mapLeft.src = "png/mapLeft.png";
        this.mapRight.src = "png/mapRight.png";
        this.mapBottom.src = "png/mapBottom.png";
        this.mapLeftTop.src = "png/mapLeftTop.png";
        this.mapRightTop.src = "png/mapRightTop.png";
        this.mapLeftBottom.src = "png/mapLeftBottom.png";
        this.mapRightBottom.src = "png/mapRightBottom.png";
        //road
        this.roadLeftRight.src = "png/roadLeftRight.png";
        this.roadBottomLeft.src = "png/roadBottomLeft.png";
        this.roadBottomRight.src = "png/roadBottomRight.png";
        this.roadBottomTop.src = "png/roadBottomTop.png";
        this.roadTopLeft.src = "png/roadTopLeft.png";
        this.roadTopRight.src = "png/roadTopRight.png";
        // adds
        this.mapTree1.src = "png/mapTree.png";
        this.mapTree2.src = "png/mapTree1.png";
        this.mapTree3.src = "png/mapTree2.png";
        this.mapDiamond.src = "png/mapDiamond.png";
        this.mapStone.src = "png/mapStone.png";
    //minion
        this.minion.src = "png/minionPink.png";
    },
    // maps drawing                                                                                                    FUNCTION
    drawAdds: function (ctx = "ctx2") {
        let addsMap = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, //1
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //2
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //3
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //4
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //5
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //6
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //7
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //8
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //9
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 //10
        ]

        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {
                switch (addsMap[((y * this.mapWidth) + x)]) {

                    case 0:
                        context[ctx].fillStyle = "transparent";
                        break;
                    case 1:
                        const pMapStone = context.ctx2.createPattern(this.mapStone, "repeat");
                        context[ctx].fillStyle = pMapStone;
                        break;
                        this
                    case 2:
                        const pMapTree2 = context.ctx2.createPattern(this.mapTree2, "repeat");
                        context[ctx].fillStyle = pMapTree2;
                        break;
                    default:
                        context[ctx].fillStyle = "red";
                        break;
                }
                context[ctx].fillRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    },
    //     !   dodac ctx jako argument  !                                                                              FUNCTION
    drawMap: function (ctx = "ctx") {
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

        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {
                switch (gameMap[((y * this.mapWidth) + x)]) {
                    case 0:
                        const backgroundCenter = context.ctx.createPattern(this.mapCenter, "repeat");
                        context[ctx].fillStyle = backgroundCenter;
                        break;

                    case 1:
                        const backgroundTop = context.ctx.createPattern(this.mapTop, "repeat");
                        context[ctx].fillStyle = backgroundTop;
                        break;

                    case 2:
                        const backgroundLeft = context.ctx.createPattern(this.mapLeft, "repeat");
                        context[ctx].fillStyle = backgroundLeft;
                        break;

                    case 3:
                        const backgroundRight = context.ctx.createPattern(this.mapRight, "repeat");
                        context[ctx].fillStyle = backgroundRight;
                        break;

                    case 4:
                        const backgroundBotttom = context.ctx.createPattern(this.mapBottom, "repeat");
                        context[ctx].fillStyle = backgroundBotttom;
                        break;

                    case 5:
                        const backgroundLeftTop = context.ctx.createPattern(this.mapLeftTop, "repeat");
                        context[ctx].fillStyle = backgroundLeftTop;
                        break;

                    case 6:
                        const backgroundRightTop = context.ctx.createPattern(this.mapRightTop, "repeat");
                        context[ctx].fillStyle = backgroundRightTop;
                        break;

                    case 7:
                        const backgroundLeftBottom = context.ctx.createPattern(this.mapLeftBottom, "repeat");
                        context[ctx].fillStyle = backgroundLeftBottom;
                        break;

                    case 8:
                        const backgroundRightBottom = context.ctx.createPattern(this.mapRightBottom, "repeat");
                        context[ctx].fillStyle = backgroundRightBottom;
                        break;

                    default:
                        context[ctx].fillStyle = "blue";
                }
                context[ctx].fillRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    },
}



//                                            gold OBJECT     
let goldObj = {
    actualGold: 200,
    goldOnScreen: $(".goldAmount"),

    actualizeGold: function (amount) {
        this.actualGold += amount;
        this.goldOnScreen.text(this.actualGold);

    },
    canPay: function (cost) {
        if ((this.actualGold - cost) >= 0) {
            console.log("canpay");
            return true;
        } else
            return false;
    }
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
    let date = new Date();
    let curDate = null;
    do {
        curDate = new Date();
    }
    while (curDate - date < millis);
}
//                                             Minion Constructor                                                                       FUNCTION
function minionObj(leftOfMinion, topOfMinion, minionHp, whichMinion, ) {

    this.x = leftOfMinion;
    this.y = topOfMinion;
    this.minionHp = minionHp;
    this.canDie = true;
    this.whichMinion = whichMinion;
    this.dx = .1;
    // this.runTime = runTime/;
    // overlay.append('<div class="minion minion' + String(this.whichMinion) + '"></div>');

    // this.minion = $(".minion" + this.whichMinion);

    // this.minion.css({
    //     'left': this.x,
    //     'top': this.y,
    //     'animation-duration': this.runTime + "s"
    // });


    this.dead = function () {
        if (this.canDie) {
            this.minionObj.remove();
            console.log(this.whichMinion);
            // minionSet.minionsArray.splice(this.whichMinion, 1);
            minionSet.minionsArray[this.whichMinion] = undefined;

            console.log("created coin on position: ", this.x, this.y);
            overlay.append("<div style='left: " + this.x + "px; top: " + this.y + "px;' class='coin'></div>");
            constants.listenerFun.goldListenerRef();
            this.canDie = false;
        }
    }
    this.draw = function () {
        context.ctx4.drawImage(mapSet.minion,this.x,this.y,32,32);
        context.ctx4.beginPath();
        context.ctx4.moveTo(this.x, this.y);
        context.ctx4.lineTo(this.x + this.minionHp, this.y);
        context.ctx4.lineWidth = 2.5;
        context.ctx4.strokeStyle = "red";
        context.ctx4.stroke();
    }
    this.update = function () {
        // console.log(this.minion.offset());
        // this.x = this.minion.offset().left-overlayOffset.left;
        // this.y = this.minion.offset().top-overlayOffset.top;
        this.x +=this.dx;
        // this.y +=this.dx
        // if (this.minionHp <= 0) {
        //     this.dead();
        // }

        this.draw();
    }
}
//                                                     choose tower                                                 FUNCTION
function chooseTower() {
    if (towerSet.choosenTower == $(this).attr("id")) {
        towerSet.choosenTower = null;
    } else {
        towerSet.choosenTower = $(this).attr("id");
    }
}
//                                    towers constructor and shooting function                                      FUNCTION
function tower(x, y, dmgArea, dmgSize, dmgColor, dmg, towerType, whichTower, sound,picX) {
    x += 16; //move to the middle
    y += 16; //move to the middle

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

    this.picX = picX;
    this.sound = sound;

    this.dx;
    this.dy;
    this.diag;
    this.frame = 1;
    this.whichFrame = 1;
    this.total;

    this.whichOne;
    this.targetElement = undefined;
    this.target = {
        x: undefined,
        y: undefined
    }
    this.targetsArray = [];
    //draw
    this.shoot = function () {
        context.cost3.drawImage()
        context.ctx3.beginPath();
        context.ctx3.arc(this.x, this.y, this.dmgSize, 0, Math.PI * 2, false);
        context.ctx3.strokeStyle = this.dmgColor;
        context.ctx3.stroke();
    }
    //update   
    this.update = function () {

        if (this.targetElement == undefined) {
            // console.log(this.targetElement, "targetElement null");
            this.targetsArray = $(".minion");


            // console.log(targetsArray, "targetsArray pobrane minionki");
            targeting:
                for (var i = 0; i < this.targetsArray.length; i++) {
                    this.target.x = this.targetsArray[i].offsetLeft + minionSet.minionHalfSize;
                    this.target.y = this.targetsArray[i].offsetTop + minionSet.minionHalfSize;
                    // console.log(this.target.x, "x liczba");
                    if (pointInCircle(this.target.x, this.target.y, this.x, this.y, this.dmgArea)) {

                        // console.log(this.target.x, "x liczba");
                        this.targetElement = this.targetsArray[i];


                        for (var j = 0; j < minionSet.targetsArray.length; j++) {
                            if (minionSet.targetsArray[j] === this.targetElement) {
                                this.whichOne = j;
                            }
                        }
                        // console.log(this.targetElement);
                        break targeting;
                    }
                }
        }

        if (this.targetElement != undefined) {

            this.target.x = this.targetElement.offsetLeft + minionSet.minionHalfSize;
            this.target.y = this.targetElement.offsetTop + minionSet.minionHalfSize;
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
                    if (minionSet.minionsArray[this.whichOne] != undefined) {
                        minionSet.minionsArray[this.whichOne].minionHp -= this.dmg;
                        this.sound.play();
                        if (minionSet.minionsArray[this.whichOne].minionHp <= 0) {
                            minionSet.minionsArray[this.whichOne].dead();
                            this.targetElement = undefined;
                            this.targetsArray = $(".minion");
                            // this.sound.pause();

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
                this.targetElement = undefined;
                this.sound.pause();
            }
        }
        this.shoot();
    }

}
//                                                      ADDING TOWER                                                FUNCTION
function buildTower(yPos, xPos) {
    if (towerSet.choosenTower != null && towerSet.checkBuildPos(xPos, yPos)) {
        yPos -= 16; //center pos 
        xPos -= 16; //center pos 
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
            dmg1 = .5,
            dmg2 = .40,
            dmg3 = .21,
            cost, cost1 = 50,
            cost2 = 50,
            cost3 = 70,
            sound,
            sound1 = new Audio("audio/1.wav"),
            sound2 = new Audio("audio/2.wav"),
            sound3 = new Audio("audio/3.wav");

        //set towerType
        switch (towerSet.choosenTower) {
            case "tower1":
                towerType = towerName1;
                towerRad = towerRad1;
                dmgSize = dmgSize1;
                dmgColor = dmgColor1;
                dmg = dmg1;
                cost = cost1;
                sound = sound1;
                break;

            case "tower2":
                towerType = towerName2;
                towerRad = towerRad2;
                dmgSize = dmgSize2;
                dmgColor = dmgColor2;
                dmg = dmg2;
                cost = cost2;
                sound = sound2;

                break;
            case "tower3":
                towerType = towerName3;
                towerRad = towerRad3;
                dmgSize = dmgSize3;
                dmgColor = dmgColor3;
                dmg = dmg3;
                cost = cost3;
                sound = sound3;
                break;
            default:
                console.log("tower building gone wrong");
                break;
        }

        if (goldObj.canPay(cost)) {
            goldObj.actualGold -= cost;
            goldObj.goldOnScreen.text(goldObj.actualGold);

            console.log("place");
            overlay.append("<div class = '" + towerSet.choosenTower + "' style = 'left:" + xPos + "px; top:" + yPos + "px;' ></div>");
            towerSet.towersCoordinate.push(new tower(leftOfTowers, topOfTowers, towerRad, dmgSize, dmgColor, dmg, towerType, towerSet.whichTower, sound));
            towerSet.whichTower++;
        } else {
            console.log("Nie mamy złota Panie ..");
        }

    } else {
        console.log("nimoozna panie");
    }
}
// create random spot object
function RespownSpot(minY, maxY, minX, maxX) {
    let newObject, x, y;

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    x = random(minX, maxX);
    y = random(minY, maxY);
    newObject = {};
    newObject.x = x;
    newObject.y = y;
    return newObject;
}
//                                                   main loop functions                                            FUNCTION
function createMinions() {
    if (minionSet.minionsConstructed == false) {
        for (let i = 0; i < minionSet.waveSize[3] + 1; i++) {
            // console.log(overlayOffset,"overlayoffset when spoting");
            let Respown = RespownSpot( -120, 0, 32, 250);
            minionSet.minionsArray.push(new minionObj(Respown.y, Respown.x, minionSet.minionHp, minionSet.whichMinion));
            minionSet.whichMinion += 1;
        }
        minionSet.targetsArray = $(".minion");
        minionSet.minionsConstructed = true;
    }
}
//                              tower.update, minion.update                                                            FUNCTION
function updateAll() {
    for (let i = 0; i < minionSet.minionsArray.length; i++) {
        if (minionSet.minionsArray[i] != undefined) {
            minionSet.minionsArray[i].update();
        }
    }
    for (let i = 0; i < towerSet.towersCoordinate.length; i++) {
        towerSet.towersCoordinate[i].update();
    }
}
//                                                    animate main loop                                             FUNCTION
function animate() {
    context.cleanCanvas();
    mapSet.drawMap();
    mapSet.drawAdds();
    // drawRoad();
    updateAll();

    requestAnimationFrame(animate);
}
//                                                     clicks
function getPosOnCanvas(event) {
    let xPos = event.pageX; // - canvas.left 
    let yPos = event.pageY; // - canvas.top
    console.log(yPos, xPos);
    buildTower(yPos, xPos);
    if (towerSet.towerMenuOpened) {
        constants.towerMenu.css({
            'display': "none"
        });
        towerSet.towerMenuOpened = false;
    }

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
// init Game propertys
function init() {
    // load constants OBJECT settings (canvas width, height)
    constants.init();
    // check context OBJECT console.log
    // overlayOffset.init();
    context.ctxCheck();
    // load mapSet OBJECT images
    mapSet.loadMapImages();
    // load gold amount on the screen
    goldObj.goldOnScreen.text(goldObj.actualGold);
    // start animate canvas.ctx
    animate();
}
window.onload = init;
$(window).on("resize", overlayOffset.reSizeOffset);

constants.canvas4.addEventListener("click", getPosOnCanvas, false); //false dodac w parametrach sprawdz! !!!!!!!
constants.towers.click(chooseTower);
constants.btnGameover.click(constants.listenerFun.bloodScreen);
constants.btnResume.click(createMinions);
constants.btnMenu.click(towerSet.toggleTowerMenu);


//minionki musza umeirac caaale w tym samym jednakowym momencie a wiec scalic jakos tower shoot i minion dead






































//              gold comment defineproperty learning
// let goldObj={};
// Object.defineProperties(goldObj,{
//     "goldAmount" : {value : 200, writable: true, enumerable: false, configurable: false},
// });


// //          DRAWROAD                                                                                                       FUNCTION
// drawRoad: function (ctx = "ctx2") {
//     //trzeba ctx ustawic na 2 ! out of order !
//     let gameMapRoad = [
//         //1 left right
//         //2 bottom left
//         //3 bottom right
//         //4 bottom top
//         //5 top left
//         //6 top right    
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //1
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0, 0, //2
//         1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, //3
//         0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 6, 1, 1, 2, 0, 0, 0, //4
//         0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, //5
//         0, 0, 0, 0, 0, 6, 1, 1, 1, 1, 1, 5, 0, 0, 0, 0, 4, 0, 0, 0, //6
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, //7
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, //8
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, //9
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 //10
//     ]

//     for (let y = 0; y < mapHeight; y++) {
//         for (let x = 0; x < mapWidth; x++) {
//             switch (gameMapRoad[((y * mapWidth) + x)]) {
//                 case 0:
//                     context.ctx2.fillStyle = "transparent";
//                     break;
//                 case 1:
//                     const proadLeftRight = context.ctx.createPattern(mapSet.roadLeftRight, "repeat");
//                     context.ctx2.fillStyle = proadLeftRight;
//                     break;

//                 case 2:
//                     const proadBottomLeft = context.ctx.createPattern(mapSet.roadBottomLeft, "repeat");
//                     context.ctx2.fillStyle = proadBottomLeft;
//                     break;

//                 case 3:
//                     const proadBottomRight = context.ctx.createPattern(mapSet.roadBottomRight, "repeat");
//                     context.ctx2.fillStyle = proadBottomRight;
//                     break;

//                 case 4:
//                     const proadBottomTop = context.ctx.createPattern(mapSet.roadBottomTop, "repeat");
//                     context.ctx2.fillStyle = proadBottomTop;
//                     break;

//                 case 5:
//                     const proadTopLeft = context.ctx.createPattern(mapSet.roadTopLeft, "repeat");
//                     context.ctx2.fillStyle = proadTopLeft;
//                     break;

//                 case 6:
//                     const proadTopRight = context.ctx.createPattern(mapSet.roadTopRight, "repeat");
//                     context.ctx2.fillStyle = proadTopRight;
//                     break;

//                 default:

//                     context.ctx2.fillStyle = "blue";
//             }
//             context.ctx2.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
//         }
//     }
// }

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