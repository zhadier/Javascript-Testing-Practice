const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Wrong input type');
  }
  const capitalized = str.split(' ');
  capitalized.forEach((element, index) => {
    capitalized[index] = element.charAt(0).toUpperCase() + element.slice(1);
  });
  return capitalized.reduce((prev, next) => `${prev} ${next}`);
};
module.exports = capitalize;
