const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(calc.add(2, 3)).toBe(5);
      expect(calc.add(-1, 1)).toBe(0);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => calc.add(2, '3')).toThrow('Arguments must be numbers');
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(calc.subtract(5, 3)).toBe(2);
      expect(calc.subtract(1, 5)).toBe(-4);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => calc.subtract('5', 3)).toThrow('Arguments must be numbers');
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(calc.multiply(3, 4)).toBe(12);
      expect(calc.multiply(-2, 3)).toBe(-6);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => calc.multiply(3, '4')).toThrow('Arguments must be numbers');
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(calc.divide(10, 2)).toBe(5);
      expect(calc.divide(9, 3)).toBe(3);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => calc.divide(10, '2')).toThrow('Arguments must be numbers');
    });
  });

  describe('power', () => {
    it('should calculate the power of a base to an exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
      expect(calc.power(5, 0)).toBe(1);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => calc.power(2, '3')).toThrow('Arguments must be numbers');
    });
  });

  describe('squareRoot', () => {
    it('should calculate the square root of a number', () => {
      expect(calc.squareRoot(9)).toBe(3);
      expect(calc.squareRoot(16)).toBe(4);
    });

    it('should throw an error if the argument is negative', () => {
      expect(() => calc.squareRoot(-9)).toThrow('Cannot calculate square root of a negative number');
    });

    it('should throw an error if the argument is not a number', () => {
      expect(() => calc.squareRoot('9')).toThrow('Argument must be a number');
    });
  });
});
