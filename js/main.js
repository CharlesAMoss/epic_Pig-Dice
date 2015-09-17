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
    return Math.floor((Math.random() * 6) + 1) | 0;
}

Turn.prototype.update = function(rollValue, game) {
    if (rollValue === 1) {
        this.turnScore = 0;
        this.next(game)
    } else {
        this.turnScore += rollValue;
    }

}

Turn.prototype.hold = function(player) {
    player.score += this.turnScore;
}

Turn.prototype.next = function(game){

        this.turnScore = 0;
        this.numberOfTurns += 1;
console.log("Inside of next function");
console.log(game.currentPlayer);
    if (game.currentPlayer == ((game.players.length) -1) ) {
        game.currentPlayer = 0;
    }
    else{game.currentPlayer += 1;}
}
//global vars
//var game = new Game();

$(document).ready(function(){

    //var game = new Game();




});
