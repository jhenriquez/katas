var chai               = require('chai');
var chunkArrayInGroups = require('./chunkArrayInGroups');

describe('chunkArrayInGroups', () => {
 
  before(chai.should);

  it('should split the array in the given chunks', () => {
     chunkArrayInGroups([1,2,3,4],2).should.eql([[1,2],[3,4]]);
  });
  
});
