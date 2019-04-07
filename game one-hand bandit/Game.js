class Game {
    constructor(startMoney) {
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);
        document.querySelector(".start").addEventListener("click", this.start.bind(this));

        this.spanWallet = document.querySelector(".panel .wallet");
        this.boards = [...document.querySelectorAll(".color")];
        this.inputBid = document.querySelector(".bid");

        this.spanResult = document.querySelector(".score .result");
        this.spanGames = document.querySelector(".score .number");
        this.spanWins = document.querySelector(".score .win");
        this.spanLosses = document.querySelector(".score .lost");

        this.render();
    }

    render(colors = ["gray", "gray", "gray"], money = this.wallet.getValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        });

        this.spanWallet.textContent = money + " PLN";
        if (result) {
            result = "You won! " + String(wonMoney) + "PLN";
        } else if (!result && result !== "") result = "You lost " + String(bid) + "PLN";

        this.spanResult.textContent = result;

        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

    }

    start() {
        if (this.inputBid.value < 1) return alert("Bet value is too low !")
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) return alert("Your wallet value is too low")

        this.wallet.changeWallet(-bid);
        this.draw = new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWonInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);


        this.render(colors, this.wallet.getValue(), win, this.stats.showGameStatistics(), bid, wonMoney);
    }
}
const game = new Game(100);