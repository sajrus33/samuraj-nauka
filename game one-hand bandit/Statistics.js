class Statistics {
    constructor() {
        this.gameResults = [];
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

        return [games, wins, loses];
    }

}

const stats = new Statistics();