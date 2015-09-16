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

describe('Turn', function() {
    it("tests turn's properties a set at 0", function() {
        var testTurn = new Turn();

        expect(testTurn.numberOfTurns).to.equal(0);
        expect(testTurn.turnScore).to.equal(0);
    });

    it("turn.roll returns a number from 1 to 6", function() {
        var testTurn = new Turn();
        var number = testTurn.roll();

        expect(number).to.be.within(1,6);
    });

    it("turn.update reduces turnScore to 0 if rollValue is 1", function() {
        var testPlayer = new Player("Mad Max");
        var testPlayer2 = new Player("Rad Rex");
        var testGame = new Game();
        var testTurn = new Turn();
        testTurn.turnScore = 6;
        testTurn.update(1);
        var number = testTurn.turnScore;

        expect(number).to.equal(0);
    });

    it("adds rollValue to turnScore if rollValue is not 1", function() {
        var testTurn = new Turn();
        testTurn.update(4);
        var number = testTurn.turnScore;

        expect(number).to.equal(4);
    });


    it("adds turnScore to currentPlayer score", function() {
        var testPlayer = new Player("Mad Max");
        var testPlayer2 = new Player("Rad Rex");
        testPlayer2.score = 5;
        var testGame = new Game();
        var testTurn = new Turn();
        testTurn.turnScore = 2;
        testTurn.hold();

        console.log(testGame.currentPlayer);


        var number = testPlayer2.score;

        expect(number).to.equal(7);
    });


});
