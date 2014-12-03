var chai = require('chai').should(),
	tryCode = require('./tryCode');

describe('Case', function () {
	it('should return 3 random numbers when indications is null.', function () {
		var r = tryCode();
		r.should.be.a('Array').with.length(3);
		var r2 = tryCode();
		r.should.not.be.eql(r2);
	});

	describe('indications handling', function () {
		it('should not touch a digit when indication is zero.', function () {
			var r = tryCode();
			var r2 = tryCode([0,0,0], r);
			r2.should.be.eql(r);
		});
		it('should decrease a digit when 1 is indicated.', function () {
			var r = tryCode();
			var r2 = tryCode([1,0,0], r);
			r2[0].should.be.below(r[0]);
			r2[1].should.be.eql(r[1]);
			r2[2].should.be.eql(r[2]);
		});
		it('should increase a digit when -1 is indicated.', function () {
			var r = tryCode();
			var r2 = tryCode([-1,0,0], r);
			r2[0].should.be.above(r[0]);
			r2[1].should.be.eql(r[1]);
			r2[2].should.be.eql(r[2]);
		});
	});
});