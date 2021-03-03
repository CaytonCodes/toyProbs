/* eslint-disable no-undef */
const should = require('chai').should();
const { fourSum } = require('./fourSum.js');

describe('fourSum', () => {
  it('should exist', () => {
    should.exist(fourSum);
  });

  it('should be a function', () => {
    fourSum.should.be.a('function');
  });

  it('should return an array', () => {
    const result = fourSum([], 0);
    should.exist(result);
    result.should.be.a('array');
  });

  it('should return an empyt array for empty input', () => {
    const result = fourSum([], 0);
    should.exist(result);
    result.should.be.eql([]);
  });

  it('should return an empty array for input wiht less than four numbers', () => {
    const result = fourSum([1, 0, 0], 0);
    should.exist(result);
    result.should.be.eql([]);
  });

  it('should return an empty array for unsolvable inputs', () => {
    const result = fourSum([1, 0, 0, 0, -1, 1], 30);
    should.exist(result);
    result.should.be.eql([]);
  });

  it('should properly handle provided examples', () => {
    const result = fourSum([1, 0, -1, 0, -2, 2], 0);
    result.should.have.length(3);
    result.should.have.members([[-2, -1, 1, 2], [-2, 0, 0, -2], [-1, 0, 0, 1]]);
  });
});
