/**
 * Imports
 */

var isGeneratorFunction = require('..')
var test = require('tape')

/**
 * Tests
 */

test('generator function is generator function', function (t) {
  t.equal(isGeneratorFunction(function * () {}), true)
  t.end()
})

test('generator is not generator function', function (t) {
  t.equal(isGeneratorFunction(function * () {}()), true)
  t.end()
})

test('almost generator function is not generator function', function (t) {
  t.equal(isGeneratorFunction({ next: function () {} }), false)
  t.end()
})

test('no arg is not generator function', function (t) {
  t.equal(isGeneratorFunction(), false)
  t.end()
})

test('obj is not generator function', function (t) {
  t.equal(isGeneratorFunction({}), false)
  t.end()
})

test('function is not generator function', function (t) {
  t.equal(isGeneratorFunction(function () {}), false)
  t.end()
})

test('null is not generator function', function (t) {
  t.equal(isGeneratorFunction(null), false)
  t.end()
})

test('bool is not generator function', function (t) {
  t.equal(isGeneratorFunction(true), false)
  t.end()
})
