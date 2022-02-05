var maximum = Number.MIN_SAFE_INTEGER;
var arr = [-3, -2, 21722, 9, -8, 155, -5555];
arr.forEach(function (value) {
  if (value > maximum) {
    maximum = value;
  }
});
console.log(maximum);

