const Calc = require('../Tasks/task3');

describe('Add functionality', () => {
  test('Using add function adds the two numbers', () => {
    // Arrange
    const val1 = 3;
    const val2 = 6;
    // Act
    const sum = Calc.add(val1, val2);
    // Assert
    expect(sum).toEqual(9);
  });
  test('If one of the parameters is negative, the values will be subtracted instead', () => {
    // Arrange
    const val1 = -3;
    const val2 = 6;
    // Act
    const sum = Calc.add(val1, val2);
    // Assert
    expect(sum).toEqual(3);
  });
  test('If any one of the numbers is undefined or null, error is thrown', () => {
    // Arrange
    let val1;
    const val2 = 6;
    // Act
    // Assert
    expect(() => {
      Calc.add(val1, val2);
    }).toThrow();
  });
});

describe('Subtract functionality', () => {
  test('Using subtract function subtracts first number from second number', () => {
    // Arrange
    const val1 = 9;
    const val2 = 6;
    // Act
    const sub = Calc.subtract(val1, val2);
    // Assert
    expect(sub).toEqual(3);
  });
  test('If the second parameter is negative, the values will be added instead', () => {
    // Arrange
    const val1 = 3;
    const val2 = -6;
    // Act
    const sub = Calc.subtract(val1, val2);
    // Assert
    expect(sub).toEqual(9);
  });
  test('If any one of the numbers is undefined or null, error is thrown', () => {
    // Arrange
    let val1;
    const val2 = 6;
    // Act
    // Assert
    expect(() => {
      Calc.subtract(val1, val2);
    }).toThrow();
  });
});

describe('Multiply functionality', () => {
  test('Using multiply function multiplies the two numbers', () => {
    // Arrange
    const val1 = 3;
    const val2 = 6;
    // Act
    const mult = Calc.multiply(val1, val2);
    // Assert
    expect(mult).toEqual(18);
  });
  test('If one of the parameters is negative, the values will be the multiplicated solution with a negative sign', () => {
    // Arrange
    const val1 = -3;
    const val2 = 6;
    // Act
    const mult = Calc.multiply(val1, val2);
    // Assert
    expect(mult).toEqual(-18);
  });
  test('If both numbers are 0, error is thrown', () => {
    // Arrange
    const val1 = 0;
    const val2 = 0;
    // Act
    // Assert
    expect(() => {
      Calc.multiply(val1, val2);
    }).toThrow();
  });
});

describe('Divide functionality', () => {
  test('Using Divide function divides first number by second number', () => {
    // Arrange
    const val1 = 6;
    const val2 = 3;
    // Act
    const div = Calc.divide(val1, val2);
    // Assert
    expect(div).toEqual(2);
  });
  test('If the second parameter only or both parameters are zero, an error is thrown', () => {
    // Arrange
    const val1 = -3;
    const val2 = 0;
    // Act
    // Assert
    expect(() => {
      Calc.divide(val1, val2);
    }).toThrow();
    expect(() => {
      Calc.divide(0, val2);
    }).toThrow();
  });
  test('If first parameter is 0 and second value is defined and not 0, the value returned is always 0', () => {
    // Arrange
    const val1 = 0;
    const val2 = 6;
    // Act
    const div = Calc.divide(val1, val2);
    // Assert
    expect(div).toEqual(0);
  });
});
