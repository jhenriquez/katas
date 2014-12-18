var chai     = require('chai').should(),
	extractIds = require('./extractIds');

describe('extractIds', function () {
		var complexStructure = [];

	before(function () {
		complexStructure = { id: 1, items: [ {id: 2}, {id: 3, items: [ {id: 4}, {id: 5} ] } ] };
	});

	describe('Simple Cases', function () {
		it('should be able to handle the case of empty data being passed in. Empty object.', function () {
			extractIds({}).should.be.a('Array').with.length(0);
		});

		it('should be able to handle the case of empty data being passed in. Undefined.', function () {
			extractIds(undefined).should.be.a('Array').with.length(0);
		});

		it('should be able to handle the case of empty data being passed in. A non object type.', function () {
			extractIds('{id:1}').should.be.a('Array').with.length(0);
		});

		it('should be able to process a non nested object.', function () {
			extractIds({id:1}).should.be.a('Array').with.length(1).and.eql([1]);
		});
	});

	describe('Complex Cases', function () {
		it('should extract the IDs from the dataset.', function () {
			extractIds(complexStructure).should.be.a('Array').with.length(5).and.eql([1,2,3,4,5]);
		});
	});

	describe('Very, Very, Very Wrong Data Cases', function () {
		it('should be able to handle an input with items and not an id', function () {
			extractIds({items: [{id:1}, {items: [{id:2}]}]}).should.be.a('Array').and.eql([1,2]);
		});

		it ('should not process and items option that is not an array.', function () {
			extractIds({id:1, items: {id:2}}).should.be.a('Array').and.eql([1]);
		});
	});
});