const stringLength = (str) => {
  const chars = str.length;
  if (chars < 1 || chars > 10) {
    throw new Error('String size must not be greater than 10 characters or less than 1 character');
  }
  return chars;
};
module.exports = stringLength;
