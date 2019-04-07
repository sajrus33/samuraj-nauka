class Result {
    static moneyWonInGame(result, bid, multiply = 3) {
        if (result) return multiply * bid;
        else return 0;
    }
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
        else return false;
    }
}

Result.moneyWonInGame(true, 5, 4);