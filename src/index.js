exports.min = function min (...values) {
  if (values == undefined) return 0;
  if (Array.isArray(values[0])) values = values[0];
  if (values.length == 0) return 0;


  let min = values[0];

  values.forEach(function(value){
    if (value < min) min = value;
  });

  return min;
}

exports.max = function max (...values) {
  if (values == undefined) return 0;
  if (Array.isArray(values[0])) values = values[0];
  if (values.length == 0) return 0;

  let max = values[0];

  values.forEach(function(value){
    if (value > max) max = value;
  });

  return max;
}

exports.avg = function avg (...values) {
  if (values == undefined) return 0;
  if (Array.isArray(values[0])) values = values[0];
  if (values.length == 0) return 0;

  let avg = 0;

  let sum = 0;

  values.forEach(function(value){
    sum += value;
  });

  avg = sum / values.length;

  return avg;
}

// console.log(min());

// console.log(min([]));