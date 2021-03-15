/* eslint-disable no-undef */
const should = require('chai').should();
const { LinkedList } = require('./linkedList.js');

describe('LinkedList', () => {
  it('should exist', () => {
    should.exist(LinkedList);
  });

  it('should have head, tail, and length properties', () => {
    const listEx = new LinkedList();
    listEx.should.ownProperty('head');
    listEx.should.ownProperty('tail');
    listEx.should.ownProperty('length');
  });

  it('should add nodes, track length changes, and find by index', () => {
    const listEx = new LinkedList();
    listEx.insert(0);
    listEx.insert(1);
    listEx.insert(2);
    listEx.length.should.equal(3);
    listEx.findNode(0).value.should.equal(0);
    listEx.findNode(1).value.should.equal(1);
    listEx.findNode('tail').value.should.equal(2);
  });

  it('should insert at head, tail, and specified indices', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(0, 'head');
    list.insert(3, 'tail');
    list.insert(2, 2);
    list.findNode(0).value.should.equal(0);
    list.findNode('tail').value.should.equal(3);
    list.findNode(2).value.should.equal(2);
  });

  it('should delete at head, tail, and specified indices', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(0, 'head');
    list.insert(3, 'tail');
    list.insert(2, 2);
    list.length.should.equal(4);
    list.delete();
    list.length.should.equal(3);
    list.findNode('tail').value.should.equal(2);
    list.delete('head');
    list.length.should.equal(2);
    list.findNode('head').value.should.equal(1);
    list.delete(1);
    list.length.should.equal(1);
    list.findNode('tail').value.should.equal(1);
  });
});
