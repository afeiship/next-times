(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.times should generate an array', function () {
      const res = nx.times(3, (index) => {
        return { index };
      });
      expect(res).toEqual([{ index: 0 }, { index: 1 }, { index: 2 }]);
    });
  });
})();
