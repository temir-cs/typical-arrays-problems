
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  // Traditional way
  /* let min = array[0];
  for (const num of array) {
    if (num < min) {
      min = num;
    }
  }
  return min; */

  // Functional way
  return array.reduce((min, current) => current < min ? current : min, array[0]);
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  // Traditional way
  /* let max = array[0];
  for (const num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max; */

  // Functional way
  return array.reduce((max, current) => current > max ? current : max, array[0]);
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  // Traditional way
  /* let total = 0;
  for (const num of array) {
    total += num;
  }
  const avg = total / array.length;
  return avg; */
  
  // Functional way
  return array.reduce((total, current) => total += current, 0) / array.length;
}
