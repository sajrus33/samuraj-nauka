//<a href='https://www.freepik.com/free-vector/trunks-silhouettes-in-the-forest_843410.htm'>Designed by Freepik</a> for bg card
//                       1 DOM
"use strict";
let start = true; //game object started
const myDom = {
  canvas: document.querySelector(".canvas"),
  canvas2: document.querySelector(".canvas2"),
  canvas3: document.querySelector(".canvas3"),
  //     canvas settings
  resize: function() {
    //            HERE WE CAN CHANGE RESOLUTION !!!
    const height = window.innerHeight; //slow
    const width = window.innerHeight*1.77; //slow *1.77
    myDom.canvas.width = width;
    myDom.canvas.height = height;
    myDom.canvas2.width = width;
    myDom.canvas2.height = height;
    myDom.canvas3.width = width;
    myDom.canvas3.height = height;
    console.log("canvas resized");
  }
};
// 
// 
// 
//                      2  canvas contexts
const myCtx = {
  ctx1: myDom.canvas.getContext("2d", { alpha: false }),
  ctx2: myDom.canvas2.getContext("2d", { alpha: false }),
  ctx3: myDom.canvas3.getContext("2d"),
  //  canvas clearer
  cleanScreen: function() {
    myCtx.ctx1.clearRect(0, 0, innerWidth, innerHeight); //table
    myCtx.ctx2.clearRect(0, 0, innerWidth, innerHeight); //cards
    myCtx.ctx3.clearRect(0, 0, innerWidth, innerHeight);
  },
  check: function() {
    console.log(this.ctx1, this.ctx2, this.ctx3);
  },
  setup: function(antyalis) {
    myCtx.ctx1.imageSmoothingQuality = antyalis;
    myCtx.ctx2.imageSmoothingQuality = antyalis;
    myCtx.ctx3.imageSmoothingQuality = antyalis;
  }
};
// 
// 
// 
//                      3 images
// function Hero(imgSrc) {



//   this.image
//   this.image = new Image();
//   this.load = function(){
//     this.image.src = imgSrc;
//   }

// }
const heroe = {
  image: "img/warrior.png",
}
const heroes = [
  ["warrior","img/warrior.png","img/warriorSelect.png",4,2,8,"physic"],
  ["warrior2","img/warrior2.png","img/warrior2Select.png",4,2,8,"physic"],
  ["barbarian","img/barbarian.png","img/barbarianSelect.png",6,1,6,"physic"],
  ["omar","img/omar.png","img/omarSelect.png",4,8,8,"physic"],
  ["deathKnight","img/deathKnight.png","img/deathKnightSelect.png",6,6,2,"physic"],
  ["spartan","img/spartan.png","img/spartanSelect.png",3,3,3,"magic"],
  ["angel","img/angel.png","img/angelSelect.png",0,9,9,"magic"],
  ["cavalery","img/cavalery.png","img/cavalerySelect.png",2,0,5,"physic"],

]
const Images = {
 
  cardBg: "img/cardBg.jpg",
  back: new Image(),

  label: new Image(),

  battleSpot: new Image(),
  battleGround: new Image(),
  tabel: new Image(),
  load: function() {
    this.back.src = "img/back.png";

    this.label.src = "img/label.png";

    this.battleSpot.src = "img/battleSpot.png";
    this.battleGround.src = "img/battleGround.png";
    this.tabel.src = "img/tabel.png";
  }
};
// 
// 
// 
// -> ajax object ->
const player = {
  antyalising: "high",
  cards: {
    onHand: [],
    onGraveyard: [],
    onSpot: []
  },
  battleGround: {
    spots: []
  }
};
// 
// 
// 
// <- ajax object <-
const enemy = {
  cards: {
    onHand: [],
    onGraveyard: [],
    onSpot: []
  },
  battleGround: {
    spots: []
  }
};
// 
// 
// 
// 
// 
// 
// 
// 
// 
//    
//     
//                   4 table object constructor
function Table(
  x = 0,
  y = 0,
  width = myDom.canvas.width,
  height = myDom.canvas.height,
  img = Images.tabel
) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.img = img;

  this.draw = function() {
    myCtx.ctx2.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
  this.resize = function() {
    this.width = myDom.canvas.width;
    this.height = myDom.canvas.height;
  };
}
const table = new Table();
// 
// 
// 
//                    5 battleground Objects
function BattleGround(
  enemy = false,
  x = 0,
  width = myDom.canvas.width,
  height = myDom.canvas.height / 3,
  img = Images.battleGround
) {
  this.enemy = enemy;
  this.x = x;
  this.y = 0;

  this.width = width;
  this.height = height;

  this.img = img;
  this.draw = function() {
    myCtx.ctx2.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
  this.resize = function() {
    this.width = myDom.canvas.width;
    this.height = myDom.canvas.height / 1.5;
    if (this.enemy) {
      this.y = myDom.canvas.height * 0.45 - this.height;
    } else this.y = myDom.canvas.height * 0.9 - this.height;
  };
}
const battleGround = new BattleGround();
const enemyBattleGround = new BattleGround(true);
// 
// 
// 
//                    5 battleground spots Objects
function BattleSpot(
  index,
  enemy = false,
  x = 0,
  y = 0,
  width = myDom.canvas.width / 7,
  height = myDom.canvas.height / (4 * 5),
  img = Images.battleSpot
) {
  this.index = index;
  this.x = x;
  this.width = width;
  this.height = height;
  this.y = y;
  this.img = img;
  this.enemy = enemy;
  this.draw = function() {
    myCtx.ctx2.drawImage(this.img, this.x, this.y, this.width, this.height);
    // console.log("table drawed",this.img,this.x,this.y,this.width,this.height);
  };
  this.resize = function() {
    this.width = myDom.canvas.width / 7;
    this.height = myDom.canvas.height / (4 * 3);
    this.x = this.index * this.width;

    if (this.enemy) {
      this.y = Math.floor(myDom.canvas.height * 0.27);
    } else {
      this.y = Math.floor(this.height * 2 * 3 + myDom.canvas.height * 0.23);
      // console.log(this.y, "spot");
    }
  };
}
// 
// 
// 
//BattleSpots objects
function createBattleSpots(amount = 7) {
  for (let i = 0; i < amount; i++) {
    player.battleGround.spots.push(new BattleSpot(i));
  }
  for (let i = 0; i < amount; i++) {
    enemy.battleGround.spots.push(new BattleSpot(i, true));
  }
}
// 
// 
// 
//                    7 cards object
function Card( 
  index = 1,
  isPlayer = true,
  image = "img/angel.png",
  imageSelect = "img/angelSelect.png",
  imageBg = "img/cardBg.jpg",
  physic = 1,
  magic = 1,
  hp = 1,
  atribute = "physic",

  speaking = false,
  degrees = 0,
  onBattle = false,
  fighting = false,
  x = 0,
  y = 0,
  height = 105,
  width = 54
) {
  //index
  this.index = index;
  this.player = isPlayer;
  this.speaking = speaking;
  this.fighting = fighting;
  this.onBattle = onBattle;

  //entity
  this.x = x; 
  this.y = y; 
  this.width = width;
  this.height = height;
  this.padding = 3; 

  //imgs
  this.image = new Image();
  this.imageSrc = image;
  this.imageSelect = new Image();
  this.imageSelectSrc = imageSelect;
  this.imageBg = new Image();
  this.imageBgSrc = imageBg;

  this.load = function(){
    this.image.src = this.imageSrc;
    this.imageSelect.src = this.imageSelectSrc;
    this.imageBg.src = this.imageBgSrc;

  }
  this.labelImg = Images.label;

  //stats
  this.hp = hp;
  this.basicHp = hp;
  this.physic = physic;
  this.magic = magic;
  this.atribute = atribute;

  

  //extras
  this.selected = false;
  this.bgc = "#EEDFA6";
  this.degrees = degrees;

  
  //cards on player hand
  this.setOnTable = function() {
    myCtx.ctx3.save();
    myCtx.ctx3.translate(this.x, this.y);
    myCtx.ctx3.translate(this.width / 2, this.height / 2);
    myCtx.ctx3.rotate((this.degrees * Math.PI) / 180);
    myCtx.ctx3.translate(this.width / 2, this.height / 2);
    myCtx.ctx3.drawImage(
      this.imageBg,
      -this.width,
      -this.height,
      this.width,
      this.height
    );
    myCtx.ctx3.drawImage(
      this.image,
      -this.width,
      -this.height,
      this.width,
      this.height
    );
    myCtx.ctx3.restore();
  };
  //cards on spot on battleground
  this.setOnSpot = function() {
    myCtx.ctx3.save();
    myCtx.ctx3.translate(this.x, this.y);
    myCtx.ctx3.translate(this.width, this.height);

    //change img on selected img
    if (this.fighting) {
      myCtx.ctx3.drawImage(
        this.imageSelect,
        -this.width,
        -this.height,
        this.width,
        this.height
      );
    } else {
      //normal img
      myCtx.ctx3.drawImage(
        this.image,
        -this.width,
        -this.height,
        this.width,
        this.height
      );
    }

    myCtx.ctx3.restore();
    myCtx.ctx3.font = "bold " + String(myDom.canvas.width * 0.02) + "px Arial";
    myCtx.ctx3.fillStyle = "goldenrod";
    myCtx.ctx3.fillText(` ${this.physic} `, this.x + this.width / 5, this.y);
    myCtx.ctx3.fillStyle = "cadetblue";
    myCtx.ctx3.fillText(` ${this.magic}`, this.x + this.width / 1.8, this.y);
    myCtx.ctx3.fillStyle = "red";
    myCtx.ctx3.fillText(
      ` ${this.hp}`,
      this.x + this.width / 2,
      this.y + this.height / 1.8
    );
  };
  this.resize = function() {
    const innWidth = myDom.canvas.width;
    let cardHeight = myDom.canvas.height / 6.5; //1/6 height for cards vs screen

    const cardAmount = player.cards.onHand.length;

    const margin = Math.floor(innWidth * 0.45); //difference
    const cardWidth = (innWidth - margin) / 10; //10 slot for cards
    this.width = Math.floor(cardWidth);
    this.height = Math.floor(cardHeight);

    // change x,y property only for cards on hands
    if (!this.onBattle) {
      cardHeight = myDom.canvas.height / 4; //1/4 height for cards vs screen

      this.x =
        Math.floor(this.width * this.index) +
        margin / 2 +
        (this.width * (10 - cardAmount)) / 2;

      //count degrees of player cards
      if (this.player) {
        this.degrees = 0;
        const mediana = cardAmount / 2;
        let multiplyDeg = this.index - mediana;

        if (this.index < mediana) {
          multiplyDeg = -Math.abs(multiplyDeg);
          this.degrees += multiplyDeg * 5;
          const preY = cardHeight * 3 - myDom.canvas.height * 0.001 - this.degrees * 4; //degrees * depend on Resolution flag player.reolution.degMulti
          this.y = Math.floor(preY);
        } else if (this.index > mediana) {
          this.degrees += multiplyDeg * 5;
          const preY = cardHeight * 3 - myDom.canvas.height * 0.001 + this.degrees * 4; //degrees * depend on Resolution flag player.reolution.degMulti
          this.y = Math.floor(preY);
        } else {
          this.degrees += multiplyDeg * 5 - 2;
          const preY = cardHeight * 3 - myDom.canvas.height * 0.001 - this.degrees * 4; //degrees * depend on Resolution flag player.reolution.degMulti
          this.y = Math.floor(preY);
        }
      }
      // here change x, y property for cards which are on the battleground
    } else if (this.onBattle) {
      // console.log("we are in");
      if (this.player) {
        this.x =
          player.battleGround.spots[this.index].x +
          player.battleGround.spots[this.index].width / 2 -
          this.width / 2;
        this.y =
          player.battleGround.spots[this.index].y -
          player.battleGround.spots[this.index].height * 1.2;
      } else if (!this.player) {
        this.x =
          enemy.battleGround.spots[this.index].x +
          enemy.battleGround.spots[this.index].width / 2 -
          this.width / 2;
        this.y =
          enemy.battleGround.spots[this.index].y -
          enemy.battleGround.spots[this.index].height * 1.2;
      }
    }
  };
  this.speak = function() {
    //speak your statistic on hand, on hover
    myCtx.ctx3.drawImage(
      this.labelImg,
      this.x - myDom.canvas.width * 0.005,
      this.y - myDom.canvas.height * 0.19,
      this.width * 1.3,
      this.height * 1.3
    );
    myCtx.ctx3.font = "bold " + String(myDom.canvas.width * 0.02) + "px Arial";

    myCtx.ctx3.fillStyle = "goldenrod";
    myCtx.ctx3.fillText(
      `${this.physic} `,
      this.x + myDom.canvas.width * 0.02,
      this.y - myDom.canvas.height * 0.14
    );
    myCtx.ctx3.fillStyle = "cadetblue";
    myCtx.ctx3.fillText(
      `${this.magic}`,
      this.x + myDom.canvas.width * 0.02,
      this.y - myDom.canvas.height * 0.1
    );
    myCtx.ctx3.fillStyle = "red";
    myCtx.ctx3.fillText(`${this.hp}`, this.x + myDom.canvas.width * 0.02, this.y - myDom.canvas.height * 0.06);
  };
  this.attack = function(enemy) {
    //attack from battle spot
    enemy.hp -= Math.floor(this[this.atribute] - enemy[this.atribute]*0.15);
    if(enemy.hp<=0){
      enemy = undefined;
    }
    this.fighting = false;
   
  //  create object "Hit" that going to display itself and die elete itself after that
  //    if (this.frame == this.frameNumber) {
//             this.frame = 0;
//         }
//         context.ctx4.drawImage(this.pic, this.frame * 128 / 8, 0, 16, 16, this.x, this.y, 16, 16);
//         this.total += 1;
//         if (this.total == this.speed) {
//             this.total = 0;
//             this.frame += 1;
//         }
    
  };
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
//    
//     
// add cards
function getCardFromDeck(enemyAmount, amount) {
  //mozilla dont know about Object.values property, so i needed to put it into new array called values by map(key), now its forking on mozilla to :)
  // let values = Object.keys(Images).map(function(key) {
  //   return Images[key];
  // });
  //enemy cards
  for (let i = 0; i < enemyAmount; i++) {
    enemy.cards.onHand.push(new Card(i, false,Images.cardBg,Images.cardBg,Images.cardBg));
    enemy.cards.onHand[i].load();

  }
  //player cards
  for (let i = 0; i < amount; i++) {
    // random number, random = img index
    let random = Math.floor(Math.random() * heroes.length);
  
    // console.log(randomDev);
    //creat Card object on hand
    player.cards.onHand.push(new Card(i, true,heroes[random][1],heroes[random][2],Images.cardBg,heroes[random][3],heroes[random][4],heroes[random][5],heroes[random][6]));
    player.cards.onHand[i].load();
  }
  //tutaj w tym miejscu wysylamy na serva calą tablice card.onhand po jej powyzszym utworzeniu
  // $.ajax({
  //   url: "/test",
  //   method: "POST",
  //   contentType: "application/json",
  //   data: JSON.stringify({ p1Array: card.onHand }),
  //   success: function(response) {
  //     console.log(response);
  //   }
  // });

  // console.log(card.onEnemyHand);
}
// 
// 
// 
// 
// 
// 
// 
// 
// Hit Object
// 
// 
// 
// resize All Elements
function resizeTable() {
  myDom.resize();
  table.resize();
  battleGround.resize();
  enemyBattleGround.resize();

  for (let i = 0; i < player.battleGround.spots.length; i++) {
    player.battleGround.spots[i].resize();
    enemy.battleGround.spots[i].resize();
  }
  for (let i = 0; i < enemy.cards.onHand.length; i++) {
    enemy.cards.onHand[i].resize();
  }
  for (let i = 0; i < player.cards.onHand.length; i++) {
    player.cards.onHand[i].resize();
  }
  for (let i = 0; i < player.cards.onSpot.length; i++) {
    if (player.cards.onSpot[i]) {
      player.cards.onSpot[i].resize();
    }
    if (enemy.cards.onSpot[i]) {
      enemy.cards.onSpot[i].resize();
    }
  }
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
//    
//                                                           MOUSE EVENT LISTENERS FUNCTIONS
// mouse over card on hand = card.speaking
function cardSpeak() {
  let xPos = event.offsetX;
  let yPos = event.offsetY;
  player.cards.onHand.forEach(element => {
    if (
      yPos > element.y &&
      yPos < element.y + element.height &&
      xPos > element.x &&
      xPos < element.x + element.width
    ) {
      console.log();
      element.speaking = true;
    } else element.speaking = false;
  });
}
// 
// 
// 
// selecting card from hand
function getCurPos() {
  let xPos = event.offsetX;
  let yPos = event.offsetY;
  //for each selected==true ? card chang its position : nothing
  player.cards.onHand.forEach(element => {
    if (element.selected) {
      element.speaking = false;
      let distanceX = element.width / 2;
      let distanceY = element.height / 2;
      element.x = xPos - distanceX;
      element.y = yPos - distanceY;
    }
  });
}
// 
// 
// 
// move card from hand
function select() {
  let xPos = event.offsetX;
  let yPos = event.offsetY;
  player.cards.onHand.forEach(element => {
    if (
      yPos > element.y &&
      yPos < element.y + element.height &&
      xPos > element.x &&
      xPos < element.x + element.width
    ) {
      console.log("we got ya");
      element.selected = true;
      element.degrees = 0;
      console.log(element);
      //than create event listener
      myDom.canvas3.addEventListener("mousemove", getCurPos, false);
    }
  });
}
// 
// 
// 
// drop card on battleground or back to hand
function dropCard() {
  player.cards.onHand.forEach((element, c) => {
    if (element.selected) {
      element.selected = false;
      // element.bgc = "#EEDFA6";
      myDom.canvas3.removeEventListener("mousemove", getCurPos, false);
      player.battleGround.spots.forEach((spot, s) => {
        // console.log(spot.x, spot.y, element.x, element.y + element.height);
        if (
          element.y + element.height > spot.y &&
          element.y + element.height < spot.y + spot.height &&
          element.x > spot.x &&
          element.x + element.width < spot.x + spot.width
        ){

          const ar = player.cards.onHand[c];
          player.cards.onHand.splice(c, 1);
          player.cards.onSpot[s] = new Card(
            s,
            ar.player,
            ar.image.src,
            ar.imageSelect.src,
            ar.imageBg,
            ar.physic,
            ar.magic,
            ar.hp,
            ar.atribute,
            ar.speaking,
            ar.degrees,
            true,
            false,
           
            player.battleGround.spots[s].x +
              player.battleGround.spots[s].width / 2 -
              ar.width / 2,
            player.battleGround.spots[s].y -
              player.battleGround.spots[s].height * 1.2,
            ar.height,
            ar.width
          );
          player.cards.onSpot[s].load();
          enemy.cards.onSpot[s] = new Card(
            s,
            false,
            ar.image.src,
            ar.imageSelect.src,
            ar.imageBg,
            ar.physic,
            ar.magic,
            ar.hp,
            ar.atribute,
            ar.speaking,
            ar.degrees,
            true,
            false,
            enemy.battleGround.spots[s].x +
              enemy.battleGround.spots[s].width / 2 -
              ar.width / 2,
            enemy.battleGround.spots[s].y -
              enemy.battleGround.spots[s].height * 1.2,
            ar.height,
            ar.width
          );
          enemy.cards.onSpot[s].load();


          // re index private index property
          for (let i = 0; i < player.cards.onHand.length; i++) {
            player.cards.onHand[i].index = i;
          }
          // console.log(card.onHand, card.onSpot);
        }
      });
      //if u put card somewhere else than in destiny point than resize,new position on hand
      for (let i = 0; i < player.cards.onHand.length; i++) {
        player.cards.onHand[i].resize();
      }
    }
  });
}
// 
// 
// 
//select card on spot to arange its attack
function selectOnSpot() {
  // console.log(xPos, yPos, "befo");
  let xPos = event.offsetX; // - canvas.left
  let yPos = event.offsetY; // - canvas.top
  player.cards.onSpot.forEach(element => {
    // console.log(element, "inside of element");
    if (element) {
      if (
        yPos > element.y &&
        yPos < element.y + element.height &&
        xPos > element.x &&
        xPos < element.x + element.width
      ) {
        if (element.fighting) {
          element.fighting = false;
        } else{
            player.cards.onSpot.forEach(another => {
              another.fighting = false;
            });
          }
          element.fighting = true;

        console.log(element, "we choose ya to attack");
        //than create event listener
      }
    }
  });
}
// 
// 
// 
// choose attack target
function chooseTarget() {
  //target -hp, check target if dead,
  let xPos = event.offsetX; // - canvas.left
  let yPos = event.offsetY; // - canvas.top
  enemy.cards.onSpot.forEach((target, i) => {
    // console.log(element, "inside of element");
    if (target) {
      if (
        yPos > target.y &&
        yPos < target.y + target.height &&
        xPos > target.x &&
        xPos < target.x + target.width
      ) {
        console.log(target, "we choose ya as a target");

        player.cards.onSpot.forEach(element => {
          if (element && element.fighting) {
            element.attack(target);
            if (target.hp<=0) {
              //if target hp <= 0 than remove it
              enemy.cards.onSpot[i] = undefined;
            }
          }
        });
      }
    }
  });
  
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// All draw functions 
function drawAll() {
  table.draw();
  battleGround.draw();
  enemyBattleGround.draw();
  for (let i = 0; i < player.battleGround.spots.length; i++) {
    player.battleGround.spots[i].draw();
    enemy.battleGround.spots[i].draw();
  }
  //cards
  for (let i = 0; i < enemy.cards.onHand.length; i++) {
    enemy.cards.onHand[i].setOnTable();
  }
  for (let i = 0; i < player.cards.onSpot.length; i++) {
    if (player.cards.onSpot[i]) {
      player.cards.onSpot[i].setOnSpot();
    }
    if (enemy.cards.onSpot[i]) {
      enemy.cards.onSpot[i].setOnSpot();
    }
  }
  for (let i = 0; i < player.cards.onHand.length; i++) {
    player.cards.onHand[i].setOnTable();
    if (player.cards.onHand[i].speaking) {
      player.cards.onHand[i].speak();
    }
  }
}
// 
// 
// 
// Main animate loop
function animate() {
  myCtx.cleanScreen();
  drawAll();
  requestAnimationFrame(animate);
}
// 
// 
// 
// Initialization
function init() {
  Images.load();
  myDom.resize();
  myCtx.check();
  myCtx.setup(player.antyalising);
  
  createBattleSpots();
  getCardFromDeck(10, 10);
  
  resizeTable();
  start = false;

  requestAnimationFrame(animate);
  console.log(myDom);
}
// 
// 
// 
// Listeners
window.addEventListener("resize", resizeTable);
myDom.canvas3.addEventListener("mousedown", select);
myDom.canvas3.addEventListener("mousedown", selectOnSpot);
myDom.canvas3.addEventListener("mousedown", chooseTarget);
myDom.canvas3.addEventListener("mouseup", dropCard);
myDom.canvas3.addEventListener("mousemove", cardSpeak);
// myDom.canvas3.addEventListener("touchmove", cardSpeak);
// myDom.canvas3.addEventListener("touchstart", select);
