class Calculator {
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    return a + b;
  }

  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    return a - b;
  }

  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    return a * b;
  }

  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  squareRoot(value) {
    if (typeof value !== 'number') {
      throw new Error('Argument must be a number');
    }
    if (value < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    return Math.sqrt(value);
  }
}

module.exports = Calculator;
