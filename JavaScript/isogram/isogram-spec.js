var chai    = require('chai');
var Isogram = require('./isogram');

describe('Isogram', function () {

  before(chai.should);

  describe('#check', function () {
    
    it('should validate an empty string as an isogram', function () {
      new Isogram().check('').should.eql(true);
    });

    it('should decline any input which contains numbers', function () {
      new Isogram().check('ab1').should.eql(false);
    });

    it('should validate a word with no repeating characters', function () {
      new Isogram().check('isogram').should.eql(true);
    });

    it('should decline a word with a single repeating character', function () {
      new Isogram().check('avatar').should.eql(false);
    });

    it('should validate the word "deed" as an isogram', function () {
      new Isogram().check('deed').should.eql(true);
    });

    it('same chars may not be the same case', function () {
      new Isogram().check('moOse').should.eql(false);
    });

  });
  
});
