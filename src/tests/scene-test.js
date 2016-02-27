import Player from '../scripts/Player.js';

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var player = new Player("noname");
        expect(player.toString()).toEqual("hellononame");
    });
});