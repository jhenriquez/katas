function cakes(recipe, available) {
	var cakesCount = 0;
	var ingredients = {};
	for (var attr in available) {
        if (available.hasOwnProperty(attr)) ingredients[attr] = available[attr];
    }
	try {
		do {
			Object.keys(recipe).map(function (ingredient) {
				ingredients[ingredient] = (ingredients[ingredient] || 0) - recipe[ingredient]; 
				if (ingredients[ingredient] < 0) {
					throw new Error('No more Cakes!')
				}
			});
			cakesCount++;
		} while(true);
	} catch (noMoreCakes) {
		return cakesCount;
	}
}

module.exports = cakes;