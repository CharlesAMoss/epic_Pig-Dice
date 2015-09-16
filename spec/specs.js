describe('Player', function() {
  it("it returns a player object with name and score of 0", function() {
    var testPlayer = new Player("Mad Max");

    expect(testPlayer.name).to.equal("Mad Max");
    expect(testPlayer.score).to.equal(0);

  });
});
