import * as utilities from "/public/src/utilities.js";
import * as resources from "/public/src/resources.js";

import { Card } from "/public/src/Card.js";
import { Table } from "/public/src/Table.js";
import { myAlert } from "/public/src/myAlert.js";
console.log({ utilities, myAlert, Card, resources, Table });


export class Game {
    constructor(cardsOption = 2, category = "catedras") {
        this.category = category;
        myAlert(this.category);

        this.cardsOption = cardsOption;
        this.resources = resources;
        this.utilities = utilities;
        this.table = new Table(document.body, "100%", "100%", this.resources.imgs.catedras[2], this.resources.imgs.catedras[0]);
        this.Card = Card;
        this.cards = [];
        this.cardsChecked = [];
        this.needUncheck = false;

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
            this.table.statistics.chance++;
            // console.log(this.table.statistics.chance);
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

                if (this.cardsChecked[0].imgSrc2 == this.cardsChecked[1].imgSrc2) {
                    console.log("similar");
                    this.cards[first].done();
                    this.cards[second].done();
                    this.table.statistics.score++;


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
                this.cards.push(new Card(this.table.cardswrapper, this.resources.cards.width[y], this.resources.cards.height[y], this.resources.imgs.catedras[i + 3], this.resources.imgs.catedras[1]));

            }
        };


        this.init = (cardsOption = this.cardsOption) => {
            this.table.appendTo();
            this.setCards(cardsOption);
            this.cards.forEach(card => {
                card.canvas.addEventListener("click", this.result);
            });

        };
    }
}



const game = new Game();
game.init();




