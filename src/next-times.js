(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.times = function (inTimes,inCallback,inContext) {
    var result = [];
    for (var index = 0; index < inTimes; index++) {
      result.push( inCallback.call(inContext, index ) );
    }
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.times;
  }

}());
