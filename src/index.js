(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.times = function (inTimes, inCallback, inContext) {
    var result = [];
    for (var index = 0; index < inTimes; index++) {
      result.push(inCallback.call(inContext, index));
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.times;
  }
})();
