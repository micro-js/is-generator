/**
 * Modules
 */

var isGenerator = require('@micro-js/is-generator')

/**
 * Expose isGeneratorFunction
 */

module.exports = isGeneratorFunction['default'] = isGeneratorFunction

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGeneratorFunction(obj) {
  if (!obj) return false
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}
