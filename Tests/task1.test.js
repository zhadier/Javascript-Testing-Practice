const stringLength = require('../Tasks/task1');

test('When person gives a string as input, should return number of characters', () => {
  //Arrange
  const str = 'Hello';
  //Act
  const chars = stringLength(str);
  //Assert
  expect(chars).toEqual(5);
});

test('String must be atleast 1 character long and not longer than 10 characters', () => {
  //Arrange
  const str1 = '';
  const str2 = 'abcdefghijk';
  //Act
  //Assert
  expect(() => {
    stringLength(str2);
  }).toThrow();
  expect(() => {
    stringLength(str1);
  }).toThrow();
});
