const reduce = (fn, initialValue, [first, ...all]) =>
  first ? reduce(fn, fn(initialValue, first), all) : initialValue;

module.exports = reduce;
