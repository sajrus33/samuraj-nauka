import * as utilities from "/public/src/utilities.js";
import * as resources from "/public/src/resources.js";

import { Card } from "/public/src/Card.js";
import { Table } from "/public/src/Table.js";
import { myAlert } from "/public/src/myAlert.js";
console.log({ utilities, myAlert, Card, resources, Table });
myAlert("hi");


export class Game {
    constructor() {
        this.resources = resources;
        console.log(this.resources.imgs);
        this.table = new Table(document.body, "100%", "100%", this.resources.imgs.catedras[0], this.resources.imgs.table);
        this.Card = Card;
        this.card = [];


        // render all
        this.render = () => {
            this.table.render();

        };


        this.init = () => {
            // 40
            //  10% 25%
            // 20 
            //  20% 25%
            // 16
            //  25% 25%

            const y = 1;

            this.table.appendTo();
            for (let i = 0; i < resources.cards.number[y]; i++) {
                this.card.push(new Card(this.table.Cardswrapper, this.resources.cards.width[y], this.resources.cards.height[y], this.resources.imgs.catedras[3], this.resources.imgs.catedras[0]));
                this.card[i].appendTo();
            }

        };
    }
}



const game = new Game();
game.init();
// const table = new Table(document.body, "640px", "320px");
// table.appendTo();

// const cards = [];
// for (let i = 0; i < 50; i++) {
//     cards.push(new Card(table.div, "10%", "20%"));
//     cards[i].appendTo();
//     cards[i].render();
// }





console.log({ utilities, myAlert, Card, resources, Table });
myAlert("hi");

