//LESSON 1
// element w jsx, ale nawias dla pewnosci powinnien byc !
const header = <header className="title">Pierwszy element React</header>;

// element w js
const element2 = React.createElement("div", null, "Pierwszy element React");

// element w jsx, mozna pisac w jednej lini ale to nie poprawne
const element3 = (
  <div>
    <p id="main" className="red">
      Tekst
    </p>
  </div>
);
console.log({ React });
console.log({ ReactDOM });

//LESSON 2
const classRed = "red";

const main = (
  <div>
    <h1 className={classRed}>Pierwszy artykul</h1>
    <p>Lorem lore loreem</p>
  </div>
);

const footer = (
  <footer>
    <p>Stopka</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
