
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    
    let min = array[0];

    for (i=0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;

    let max = array[0];

    for (i=0; i < array.length; i++) {
      if (array[i] > max) {
          max = array[i];
      }
  }
  return max;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let sum = array.reduce (function(a, b) {
        return a + b;
      });
        return sum / array.length;
}
