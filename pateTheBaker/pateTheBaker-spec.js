var chai = require('chai'),
	cakes = require('./pateTheBaker');

chai.should();

describe('cakes', function () {
	describe('examples', function () {
		it('Cake Recipe #1', function () {
			cakes(
				{flour: 500, sugar: 200, eggs: 1},
				{flour: 1200, sugar: 1200, eggs: 5, milk: 200}
			).should.eql(2);
		});

		it('Cake Recipe #2', function () {
			cakes(
				{apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
				{sugar: 500, flour: 2000, milk: 2000}
			).should.eql(0);
		});
	});
});