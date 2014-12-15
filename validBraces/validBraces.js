function validBraces(braces) {
	var lookup = { ')':'(', '}':'{', ']':'[' };
	 return braces
		.split('')
		.reduce(
			function (scope, symbol) {
				if(/[{(\[]/.test(symbol)) {
					scope.push(symbol);
				} else {
					if (scope[scope.length-1] === lookup[symbol]) {
						scope.length--;
						return scope;
					}
					scope.push(symbol);
				}
				return scope;
			}, []).length === 0;
}

module.exports = validBraces;
