var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-times');

describe('next/times', function () {

  it('nx- times', function () {
    var it1 = function(index){
      return index + 'a';
    };

    assert.deepEqual(nx.times(3,it1), ['0a','1a','2a']);
  });

});
