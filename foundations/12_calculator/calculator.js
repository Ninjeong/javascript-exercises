const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  let product = arr[0];
  for (let i = 1; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
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
