function cakes(recipe, available) {
	return Object.keys(recipe).map(function (ingredient) {
		return Math.floor((available[ingredient] || 0) / recipe[ingredient]);
	})
	.sort(function (a,b) { return a - b; })[0] || 0;
}

module.exports = cakes;