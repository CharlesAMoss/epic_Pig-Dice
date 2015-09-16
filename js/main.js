function Player(name){
  this.name = name;
  this.score = 0;

}

Player.prototype.joinGame = function(gameTojoin){
    gameTojoin.players.push(this);
}

function Game(){
    this.players = [];
    this.maxPlayers = 2;
}
