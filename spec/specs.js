describe('Player', function() {

    it("returns a player object with name and score of 0", function() {
        var testPlayer = new Player("Mad Max");

        expect(testPlayer.name).to.equal("Mad Max");
        expect(testPlayer.score).to.equal(0);

    });

    it("joins a player to a game", function() {
        var testPlayer = new Player("Mad Max");
        var testGame = new Game();
        testPlayer.joinGame(testGame);

        expect(testGame.players[0]).to.equal(testPlayer);

    });

    it("tests that 2 players equals max players", function() {
        var testPlayer = new Player("Mad Max");
        var testPlayer2 = new Player("Rad Rex");
        var testGame = new Game();
        testPlayer.joinGame(testGame);
        testPlayer2.joinGame(testGame);

        expect(testGame.players[1]).to.equal(testPlayer2);
        expect(testGame.players.length).to.equal(testGame.maxPlayers);

    });




});

describe('Game', function() {
    it("it returns a game object with an empty array", function() {
        var testGame = new Game();

        expect(testGame.players).to.eql([]);

    });

});
