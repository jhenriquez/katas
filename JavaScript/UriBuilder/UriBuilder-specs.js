var UriBuilder = require('./UriBuilder');
var chai       = require('chai');

describe('UriBuilder', function () {

  before(function () {
    chai.should();
  });

  it('should allow delete of params.', function () {
    var uriBuilder = new UriBuilder('someUrl?param=value');
    uriBuilder.params.param.should.eql('value');
    delete uriBuilder.params.param;
    uriBuilder.build().should.eql('someUrl');
  });
 
  it('should recognize existing parameters in the url.', function () {
    var uriBuilder = new UriBuilder('someUrl?param=1&param2=2');
    uriBuilder.params.param.should.eql('1');
    uriBuilder.params.param2.should.eql('2');
  });

  it('should update provided parameters.', function () {
    var uriBuilder = new UriBuilder('someUrl?param=value');
    uriBuilder.params.param = 'otherValue';
    uriBuilder.build().should.eql('someUrl?param=otherValue');
  });

  it('should handle multiple parameters.', function () {
    var uriBuilder = new UriBuilder('someUrl');
    uriBuilder.params.a = 1;
    uriBuilder.build().should.eql('someUrl?a=1');
    uriBuilder.params.b = 2; 
    uriBuilder.build().should.eql('someUrl?a=1&b=2');
  });

  it('should return a properly encoded url.', function () {
    var uriBuilder = new UriBuilder('someUrl');
    uriBuilder.params.a = 1;
    uriBuilder.params.b = '1 2';
    uriBuilder.build().should.eql('someUrl?a=1&b=1%202');
  });

});
