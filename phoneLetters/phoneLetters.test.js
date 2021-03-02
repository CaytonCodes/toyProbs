/* eslint-disable no-undef */
const should = require('chai').should();
const { letterCombinations } = require('./phoneLetters.js');

describe('phoneLetters', () => {
  it('should exist', () => {
    should.exist(letterCombinations);
  });

  it('should be a function', () => {
    letterCombinations.should.be.a('function');
  });

  it('should return an array', () => {
    const result = letterCombinations('');
    should.exist(result);
    result.should.be.a('array');
  });

  it('should return an empty array for an empty string', () => {
    const result = letterCombinations('');
    should.exist(result);
    result.should.be.eql([]);
  });

  it('should handle provided examples', () => {
    let input = '23';
    let result = letterCombinations(input);
    should.exist(result);
    result.should.have.length(9);
    result.should.have.members(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);

    input = '2';
    result = letterCombinations(input);
    result.should.have.length(3);
    result.should.have.members(['a', 'b', 'c']);
  });
});
