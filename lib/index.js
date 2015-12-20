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
  if (!obj || !obj.constructor) return false
  return obj.constructor.name === 'GeneratorFunction' || obj.constructor.displayName === 'GeneratorFunction'
}
