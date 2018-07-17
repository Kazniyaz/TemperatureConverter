function convertToFFromC(temp) {
  return Math.round(temp * (9 / 5) + 32);
}

function convertToCFromF(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

module.exports = { convertToFFromC, convertToCFromF };
