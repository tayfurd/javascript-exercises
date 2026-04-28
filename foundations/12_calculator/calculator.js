const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)
  return result;
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let result = 1
  for(i = a; i > 0; i--) {
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
