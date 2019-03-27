class Result {
    static moneyWonInGame(result, bid, multiply = 3) {
        if (result) return multiply * bid;
        else return 0;
    }
    static checkWinner(draw) {
        let win;
        for (let i = 0; i < draw.length; i++) {
            draw[0] === draw[i];
        }
        if (win) return true;

    }
    static show() {
        console.log("show result");
    }

}

Result.moneyWonInGame(true, 5, 4);