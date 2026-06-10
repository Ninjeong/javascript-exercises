const convertToCelsius = function(fTemp) {
    let multiplier = Math.pow(10, 1 || 0);
    return Math.round((fTemp - 32) * (5/9) * multiplier) / multiplier;
};

const convertToFahrenheit = function(cTemp) {
    let multiplier = Math.pow(10, 1 || 0);
    return Math.round((cTemp * (9/5) + 32) * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
