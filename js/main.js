function Player(name) {
    this.name = name;
    this.score = 0;

}

Player.prototype.joinGame = function(gameTojoin) {
    gameTojoin.players.push(this);
}

function Game() {
    this.players = [];
    this.maxPlayers = 2;
    this.currentPlayer = 0;
    this.turn = new Turn();

}

Game.prototype.update = function(rollValue) {
    if (rollValue === 1) {
        this.turn.turnScore = 0;
        this.next()
    } else {
        this.turn.turnScore += rollValue;
    }

}

Game.prototype.next = function() {

    if (this.players[this.currentPlayer].score >= 100) {
        return this.gameOver();
    }

    this.turnScore = 0;
    this.numberOfTurns += 1;

    if (this.currentPlayer == ((this.players.length) - 1)) {
        this.currentPlayer = 0;
        return this.players[this.currentPlayer].name + "'s turn!";
    } else {
        this.currentPlayer += 1;
        return this.players[this.currentPlayer].name + "'s turn!";
    }

}

Game.prototype.gameOver = function() {

    var winner = this.players[this.currentPlayer]
    return winner.name + " wins with a total of " + winner.score + " points!";

}

function Turn() {
    this.numberOfTurns = 0;
    this.turnScore = 0;
}

Turn.prototype.roll = function() {
    return Math.floor((Math.random() * 6) + 1) | 0;
}

Turn.prototype.hold = function(player) {
    player.score += this.turnScore;
}

$(document).ready(function() {

    //var game = new Game();




});
