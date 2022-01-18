const reverseString = require('../Tasks/task2');

test('Given string must be reversed', () => {
  // Arrange
  const str = 'Hello World';
  // Act
  const chars = reverseString(str);
  // Assert
  expect(chars).toMatch('dlroW olleH');
});
