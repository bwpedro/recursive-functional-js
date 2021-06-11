const filter = (predicate, [first, ...all]) => {
  if (!first) {
    return [];
  }

  return predicate(first)
    ? [first, ...filter(predicate, all)]
    : [...filter(predicate, all)];
};

module.exports = filter;
