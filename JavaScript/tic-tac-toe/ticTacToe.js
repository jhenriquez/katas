function Game() {
	state = Array.apply(null, new Array(3)).map(function () { return [0,0,0] });
}

Game.prototype.move = function move () {
};

module.exports = new Game();