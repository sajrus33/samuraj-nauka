import * as utilities from "/public/src/utilities.js";
import * as resources from "/public/src/resources.js";

import { Card } from "/public/src/Card.js";
import { Table } from "/public/src/Table.js";
import { myAlert } from "/public/src/myAlert.js";
console.log({ utilities, myAlert, Card, resources, Table });


export class Game {
    constructor(cardsOption = 1, category = "catedras") {
        this.category = category;
        myAlert(this.category);

        this.cardsOption = cardsOption;
        this.resources = resources;
        this.utilities = utilities;

        this.gameWrapper = document.createElement("div");
        this.gameWrapper.style.width = "100%";
        this.gameWrapper.style.height = "100%";
        this.gameWrapper.style.minWidth = "320px";
        this.gameWrapper.style.minHeight = "320px";

        this.gameSize = (size) => {
            this.gameWrapper.style.width = size;
            this.gameWrapper.style.height = size;
        };
        this.resize = () => {
            const width = innerWidth;
            if (width >= 1024) {
                // seeing future "game" name
                game.gameSize("80%");
            } else {
                game.gameSize("100%");
            }
        }

        // margin on big screen
        window.addEventListener("resize", this.resize);


        document.body.appendChild(this.gameWrapper);

        this.table = new Table(this.gameWrapper, "100%", "100%", this.resources.imgs.catedrasCategory, this.resources.imgs.catedrasTable);
        this.Card = Card;
        this.cards = [];
        this.cardsChecked = [];
        this.needUncheck = false;
        this.run = false;



        this.uncheckCards = () => {
            this.cards.forEach((card) => {

                if (card.checked) {
                    card.check();
                }
            });
            this.needUncheck = false;
            this.table.statistics.chance--;


        };

        // eventListener for cards manipulation
        this.result = () => {
            if (!this.run) {
                this.run = true;
                this.table.statistics.timerStart();
            }
            this.table.statistics.chance++;
            if (this.needUncheck) {
                this.uncheckCards();
            }
            // two cards to compare
            let first, second;
            // one chance ++

            //with card is checked ?
            this.cards.forEach((card, i) => {
                if (card.checked) {

                    this.cardsChecked.push(card);
                    if (first != undefined) {
                        second = i;
                        // console.log({ second });
                    } else first = i;
                    // console.log({ first });

                }

            });
            if (this.cardsChecked.length == 2) {
                // if those two cards are equal
                if (this.cardsChecked[0].imgSrc2 == this.cardsChecked[1].imgSrc2) {
                    console.log("similar");
                    this.cards[first].done();
                    this.cards[second].done();
                    this.table.statistics.score++;

                    if (this.table.statistics.score == (this.cards.length / 2)) {
                        this.table.statistics.timerStop();
                    }


                } else {
                    this.needUncheck = true;
                    console.log("not similar");
                }
                // anyway
                first = undefined;
                second = undefined;

            }
            this.cardsChecked = [];
        };

        this.setCards = (y = 0) => {

            for (let i = 0; i < resources.cards.number[y]; i++) {
                this.cards.push(new Card(this.table.cardswrapper, this.resources.cards.width[y], this.resources.cards.height[y], this.resources.imgs.catedras[0], this.resources.imgs.catedrasBack));
            }
            // random img
            let randomNumbers = [];
            const max = this.cards.length - 1;

            for (let y = 0; y < 2; y++) {
                for (let i = 0; i <= max / 2; i++) {
                    randomNumbers.push(i);

                }
            }





            let currentIndex = randomNumbers.length;
            let temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = randomNumbers[currentIndex];
                randomNumbers[currentIndex] = randomNumbers[randomIndex];
                randomNumbers[randomIndex] = temporaryValue;
            }

            console.log(randomNumbers);
            // now update, all random pairs of imgs
            for (let i = 0; i <= max; i++) {
                this.cards[i].load(this.resources.imgs.catedras[randomNumbers[i]]);
            }

        };
        this.finish = () => {
            //remove all created HTML textures
            this.gameWrapper.remove();
        };

        this.init = (cardsOption = this.cardsOption) => {
            this.table.appendTo();
            this.setCards(cardsOption);
            this.cards.forEach(card => {
                card.canvas.addEventListener("click", this.result);
            });
            this.resize();

        };
    }
}


const game = new Game(1);

game.init();





