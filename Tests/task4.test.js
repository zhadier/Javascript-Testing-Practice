const capitalize = require('../Tasks/task4');

test('Parameter should be of type string', () => {
  //Arrange
  const str = 3;
  //Act
  //Assert
  expect(() => {
    capitalize(str);
  }).toThrow();
});

test('First letter of input string capitalized', () => {
  //Arrange
  const str = 'zeeshan haider';
  //Act
  const capitalized = capitalize(str);
  //Assert
  expect(capitalized).toMatch('Zeeshan Haider');
});
