// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winner: "",
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

function checkResult(player, ai) {
    if (player == ai) {
        return "draws";
    } else if ((player == "papier" && ai == "kamień") ||
        (player == "kamień" && ai == "nożyczki") ||
        (player == "nożyczki" && ai == "papier")) {
        return "wins";
    } else return "losses";
}

function publishResult(player, ai, result) {
    gameSummary[result]++;

    document.querySelector("[data-summary ='your-choice']")
        .textContent = player;
    document.querySelector("[data-summary ='ai-choice']")
        .textContent = ai;
    document.querySelector("[data-summary ='your-choice']")
        .textContent = player;
    document.querySelector("p.numbers span")
        .textContent = ++gameSummary["numbers"];
    document.querySelector("p.wins span")
        .textContent = gameSummary.wins;
    document.querySelector("p.losses span")
        .textContent = gameSummary.losses;
    document.querySelector("p.draws span")
        .textContent = gameSummary.draws;
    document.querySelector("[data-summary = 'who-win']")
        .textContent = result;
}
// fun end
function endGame() {
    document.querySelector("[data-option='" + game.playerHand + "']").style.boxShadow = "0 0 0 4px red";
}
// fun start
function startGame() {
    if (game.playerHand) {
        //clear box shadow
        game.aiHand = aiChoice();
        const result = checkResult(game.playerHand, game.aiHand);
        publishResult(game.playerHand, game.aiHand, result);

        hands.forEach(hand => hand.style.boxShadow = "");
        game.playerHand = "";
    } else alert("pick your hand");
}

hands.forEach(hand => hand.addEventListener("click", handSelect));

document.querySelector(".start").addEventListener("click", startGame);