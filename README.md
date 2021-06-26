# next-times
> Invokes the iteratee function n times.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-times
```

## usage
```js
import '@jswork/next-times';

const res = nx.times(3, (index) => {
  return { index };
});

// [ { index: 0 }, { index: 1 }, { index: 2 } ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-times/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-times
[version-url]: https://npmjs.org/package/@jswork/next-times

[license-image]: https://img.shields.io/npm/l/@jswork/next-times
[license-url]: https://github.com/afeiship/next-times/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-times
[size-url]: https://github.com/afeiship/next-times/blob/master/dist/next-times.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-times
[download-url]: https://www.npmjs.com/package/@jswork/next-times
