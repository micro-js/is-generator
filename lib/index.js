/**
 * Modules
 */

var isGeneratorObject = require('@f/is-generator-object')

/**
 * Expose isGenerator
 */

module.exports = isGenerator['default'] = isGenerator

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  if (!obj) return false
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGeneratorObject(constructor.prototype);
}
