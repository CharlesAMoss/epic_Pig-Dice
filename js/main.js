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
}

function Turn() {
    this.numberOfTurns = 0;
    this.turnScore = 0;
}

Turn.prototype.roll = function() {
    return Math.floor((Math.random() * 6) + 1);
}

Turn.prototype.update = function(rollValue) {
    if (rollValue === 1) {
        this.turnScore = 0;
    //    this.hold();
    } else {
        this.turnScore += rollValue;
    }

}

Turn.prototype.hold = function(player) {
    player.score += this.turnScore;
    this.turnScore = 0;
    this.numberOfTurns += 1;
    //this.next()
}
