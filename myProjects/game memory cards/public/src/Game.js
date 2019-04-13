import * as utilities from "/public/src/utilities.js";
import * as resources from "/public/src/resources.js";

import { Card } from "/public/src/Card.js";
import { Table } from "/public/src/Table.js";
import { myAlert } from "/public/src/myAlert.js";

export class Game {
    constructor({ Table, Card }) {
        this.table = new Table;



        this.init = () => {

            this.table.appendTo()
            this.lol = new card();

            console.log(this.lol, "here");
        }
    }
}



// const table = new Table(document.body, "640px", "320px");
// table.appendTo();

// const cards = [];
// for (let i = 0; i < 50; i++) {
//     cards.push(new Card(table.div, "10%", "20%"));
//     cards[i].appendTo();
//     cards[i].render();
// }

const game = new Game();
game.init();




console.log({ utilities, myAlert, Card, resources, Table });
// myAlert(cards[0].canvas.width);

