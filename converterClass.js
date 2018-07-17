function tempConverter() {
  this.tempC = 0;
  this.tempF = 0;
}

tempConverter.prototype.convertToFFromC = function() {
  return Math.round(this.tempC * (9 / 5) + 32);
};
tempConverter.prototype.convertToCFromF = function() {
  return Math.round((this.tempF - 32) * (5 / 9));
};

module.exports = tempConverter;
