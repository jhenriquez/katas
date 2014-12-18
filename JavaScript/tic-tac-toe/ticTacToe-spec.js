var chai = require('chai'),
	Game = require('./ticTacToe');

chai.should();

describe('Simple Tic-Tac-Toe', function () {
	it('should expose a move method', function () {
		Game.should.respondTo('move');
		Game.move();
	});
});