var chai        = require('chai');
var orderWeight = require('./weightSort');

describe('#orderWeight', function () {
  before(function () {
    chai.should();
  });

  it('Should sort the string by the weight of numbers', function () {
    orderWeight('103 123 4444 99 2000').should.eql('2000 103 123 4444 99');
  });

  it('Should sort equally weighted numbers by its string value', function () {
    orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123').should.eql('11 11 2000 10003 22 123 1234000 44444444 9999');
  });

  it('Should sort this other freaking set', function () {
    orderWeight('81 72 27 18').should.eql('18 27 72 81');
  });
});
