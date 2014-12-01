var chai       = require('chai').should(),
	prefill = require('./prefill');

describe('Prefill', function () {
	describe('Input Validations', function () {
		it('v can be anything (primitive or otherwise). v being a general function.', function () {
			prefill(1, function () { return 20; }).should.be.a('Array').with.length(1).and.eql([20]);
		});

		it('v can be anything (primitive or otherwise). v being an object.', function () {
			prefill(1, { plop: true }).should.be.a('Array').with.length(1).and.eql([{ plop: true }]);
		});
		it('should fill the array with undefined when v is ommited.', function () {
			prefill(1).should.be.a('Array').with.length(1).and.eql([undefined]);
		});
		it('should return an empty array when n is 0.', function () {
			prefill(0).should.be.a('Array').with.length(0);
		});
		it('should throw a TypeError when n is anything other than an integer or integer-formatted string (e.g. "123") that is >=0', function () {
			(function () { prefill("-1",1); }).should.throw(TypeError, /-1 is invalid/);
		});

		it('should throw TypeError when value is not an integer: 4.912180429324508', function () {
			(function () { prefill(4.912180429324508,1); }).should.throw(TypeError, /4.912180429324508 is invalid/);
		});
	});

	describe('Cases', function () {
		it('should return [1,1,1] for prefill(3,1)', function () {
			prefill(3,1).should.be.a('Array').with.length(3).and.eql([1,1,1]);
		});
		it('should return ["abc","abc"] for prefill(2,"abc")', function () {
			prefill(2,'abc').should.be.a('Array').with.length(2).and.eql(['abc','abc']);
		});
		it('should return ["abc","abc"] for prefill(2,"abc")', function () {
			prefill(2,'abc').should.be.a('Array').with.length(2).and.eql(['abc','abc']);
		});
		it('should return [1] for prefill("1",1)', function () {
			prefill("1",1).should.be.a('Array').with.length(1).and.eql([1]);
		});
		it('should return [["2d","2d"],["2d","2d"],["2d","2d"]] for  prefill(3, prefill(2,"2d"))', function () {
			prefill(3,prefill(2,"2d")).should.be.a('Array').with.length(3).and.eql([["2d","2d"],["2d","2d"],["2d","2d"]]);
		});
		it('should throw TypeError with message "xyz is invalid" for prefill("xyz", 1)', function () {
			(function () { prefill("xyz",1); }).should.throw(TypeError, /xyz is invalid/);
		});

		it('should work with big numbers. 10000', function () {
			prefill(10000,1).should.be.a('Array').with.length(10000);
		});
	});
});