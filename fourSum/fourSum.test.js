/* eslint-disable no-undef */
const should = require('chai').should();
const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const { fourSum } = require('./fourSum.js');

chai.use(deepEqualInAnyOrder);

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
    // result.should.have.deep.members([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
    result.should.deep.equalInAnyOrder([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);

    const result2 = fourSum([0, 1, 5, 0, 1, 5, 5, -4], 11);
    result2.should.have.length(2);
    result2.should.deep.equalInAnyOrder([[-4, 5, 5, 5], [0, 1, 5, 5]]);
  });

  it('should handle an input array of four', () => {
    const result = fourSum([0, 0, 0, 0], 0);
    result.should.have.length(1);
    result.should.deep.equalInAnyOrder([[0, 0, 0, 0]]);
  });
});
