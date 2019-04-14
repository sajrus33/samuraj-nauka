import * as utilities from "/public/src/utilities.js";
import * as resources from "/public/src/resources.js";

import { Card } from "/public/src/Card.js";
import { Table } from "/public/src/Table.js";
import { myAlert } from "/public/src/myAlert.js";
console.log({ utilities, myAlert, Card, resources, Table });
myAlert("hi");


export class Game {
    constructor() {
        this.table = new Table(document.body, "640px", "320px");
        this.Card = Card;
        this.card = [];
        this.resources = resources;
        console.log(this.resources.imgs);

        // render all
        this.render = () => {
            this.table.render();

        };


        this.init = () => {

            this.table.appendTo();
            for (let i = 0; i < 50; i++) {
                this.card.push(new Card(this.table.div, "10%", "20%", this.resources.imgs.faces[0]));
                this.card[i].appendTo();
                this.card[i].render();
            }


            // for (let i = 0; i < 50; i++) {
            //     cards.push(new Card(table.div, "10%", "20%"));
            //     cards[i].appendTo();
            //     cards[i].render();
            // }
            // console.log(this.lol, "here");
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

