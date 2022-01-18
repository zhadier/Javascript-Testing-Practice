class Calc {
  add(val1, val2) {
    if (val1 == undefined || val1 == null || val2 == undefined || val2 == null) {
      throw new Error('One of the values is undefined');
    }
    return val1 + val2;
  }
  subtract(val1, val2) {
    if (val1 == undefined || val1 == null || val2 == undefined || val2 == null) {
      throw new Error('One of the values is undefined');
    }
    return val1 - val2;
  }
  divide(val1, val2) {
    if (val1 == undefined || val1 == null || val2 == undefined || val2 == null) {
      throw new Error('One of the values is undefined');
    }
    if (val1 == 0 && val2 == 0) {
      throw new Error('0/0 is not possible');
    }
    if (val2 == 0) {
      throw new Error('divide by 0 is not possible');
    }
    return val1 / val2;
  }
  multiply(val1, val2) {
    if (val1 == undefined || val1 == null || val2 == undefined || val2 == null) {
      throw new Error('One of the values is undefined');
    }
    if (val1 == 0 && val2 == 0) {
      throw new Error('0*0 is not possible');
    }
    return val1 * val2;
  }
}

module.exports = Calc;
