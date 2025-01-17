function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-object cases
  }
  return x.length; // Access length only if x is an object with length property
}