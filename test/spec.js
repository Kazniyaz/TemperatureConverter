const expect = require('chai').expect;
const { convertToFFromC, convertToCFromF } = require('../converter');
describe('temperature converter', () => {
  it('C to F converter exists', () => {
    expect(convertToFFromC).to.be.ok;
  });
  it('F to C converter exists', () => {
    expect(convertToCFromF).to.be.ok;
  });
  let tempC = 0;
  let tempF = 32;
  it('properly converts F to C', () => {
    expect(convertToFFromC(tempC)).to.be.equal(32);
  });
  it('properly converts C to F', () => {
    expect(convertToCFromF(tempF)).to.be.equal(0);
  });
  tempC = -30;
  tempF = -25;
  it('properly converts negative F to C', () => {
    expect(convertToFFromC(tempC)).to.be.equal(-22);
  });
  it('properly converts negative C to F', () => {
    expect(convertToCFromF(tempF)).to.be.equal(-32);
  });
});
