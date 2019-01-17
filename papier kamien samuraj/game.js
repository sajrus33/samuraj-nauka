// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")]; //node list change into array
//fun 1
function handSelect() {
    // console.log(e.target, e.currentTarget); //same target of this click cause listener
    game.playerHand = this.dataset.option;
    //nie wplywa na wielkosc pojemnika w odroznieniu od border !!!
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px lightgreen";
}

function aiChoice() {
    let random = Math.floor(Math.random() * 3);
    return hands[random].dataset.option;
}
// fun main
function startGame() {
    if (game.playerHand) {
        //clear box shadow
        hands.forEach(hand => hand.style.boxShadow = "");
        game.aiHand = aiChoice();
        console.log(game.aiHand);
    } else console.log("pick ya hand");
}

hands.forEach(hand => hand.addEventListener("click", handSelect));

document.querySelector(".start").addEventListener("click", startGame);