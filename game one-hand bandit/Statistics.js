class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 2 }, { win: false, bid: -10 }, { win: false, bid: -8 }];
    }

    addGameToStatistics(win, bid) {
        const gameResult = { win, bid }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        const games = this.gameResults.length;
        const wins = this.gameResults.filter(result => result.win).length;
        const loses = this.gameResults.filter(result => !result.win).length;

        console.log(gaes, wins, loses);
        return [games, wins, loses];
    }

}

const stats = new Statistics();