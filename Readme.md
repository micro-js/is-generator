
# is-generator-function

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if generator function.

## Installation

    $ npm install @micro-js/is-generator-function

## Usage

```js
var isGeneratorFunction = require('@micro-js/is-generator-function')

isGeneratorFunction(function * () {
  yield 1
}) // => true
```

## API

### isGeneratorFunction(obj)

- `obj` - object to test

**Returns:** boolean

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-generator-function.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-generator-function
[git-image]: https://img.shields.io/github/tag/micro-js/is-generator-function.svg
[git-url]: https://github.com/micro-js/is-generator-function
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/is-generator-function.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/is-generator-function
