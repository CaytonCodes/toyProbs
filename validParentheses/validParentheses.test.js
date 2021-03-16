/* eslint-disable no-undef */
const should = require('chai').should();
const { isValid } = require('./validParentheses.js');

describe('isValid', () => {
  it('should exist', () => {
    should.exist(isValid);
  });

  it('should be a function', () => {
    isValid.should.be.a('function');
  });

  it('should return a boolean', () => {
    const result = isValid('l');
    should.exist(result);
    result.should.be.a('boolean');
  });

  it('should pass provided examples', () => {
    let result = isValid('()');
    result.should.equal(true);

    result = isValid('()[]{}');
    result.should.equal(true);

    result = isValid('(]');
    result.should.equal(false);

    result = isValid('([)]');
    result.should.equal(false);

    result = isValid('{[]}');
    result.should.equal(true);
  });
});
