var chai = require('chai'),
	namespace = require('./namespace'),
	expect = chai.expect;

chai.should();

describe('namespace', function () {
	it('Example', function () {
		namespace({}, 'moreStuff.name', 'the stuff').should.eql({moreStuff: { name: 'the stuff'}});
	});

	it('should return undefined if the path is not valid or present', function() {
		expect(namespace({},'NonExistent.path')).to.eql(undefined);
	});
});