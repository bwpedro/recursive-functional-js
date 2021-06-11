const map = (fn, [first, ...all]) =>
  first ? [fn(first), ...map(fn, all)] : [];

module.exports = map;
