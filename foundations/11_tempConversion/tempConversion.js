const convertToFahrenheit = function(degree) {
  return Math.round((degree * 1.8 + 32) * 10) / 10
};

const convertToCelsius = function(degree) {
  return Math.round((degree - 32) *  5 / 9 * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
7