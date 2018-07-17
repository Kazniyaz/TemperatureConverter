const expect = require('chai').expect;
const { convertToFFromC, convertToCFromF } = require('../converter');
const tempConverter = require('../converterClass.js');

describe('temperature converter', () => {
  it('C to F converter exists', () => {
    expect(convertToFFromC).to.be.ok;
  });
  it('F to C converter exists', () => {
    expect(convertToCFromF).to.be.ok;
  });
  var tempC = 0;
  var tempF = 32;
  it('properly converts F to C', () => {
    expect(convertToFFromC(tempC)).to.be.equal(32);
  });
  it('properly converts C to F', () => {
    expect(convertToCFromF(tempF)).to.be.equal(0);
  });
  var negTempC = -30;
  var negTempF = -25;
  it('properly converts negative F to C', () => {
    expect(convertToFFromC(negTempC)).to.be.equal(-22);
  });
  it('properly converts negative C to F', () => {
    expect(convertToCFromF(negTempF)).to.be.equal(-32);
  });
});

describe('temperature converter using converter class', () => {
  it('exists', () => {
    expect(tempConverter).to.be.ok;
  });
  var newConverter = new tempConverter();
  newConverter.tempC = 0;
  newConverter.tempF = 32;
  it('properly converts F to C', () => {
    expect(newConverter.convertToFFromC()).to.be.equal(32);
  });
  it('properly converts C to F', () => {
    expect(newConverter.convertToCFromF()).to.be.equal(0);
  });
});
