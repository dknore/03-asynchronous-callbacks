'use strict';

describe('readFiles', () => {
  const files = ['assets/large.txt', 'assets/medium.txt', 'assets/small.txt'];
  const readFiles = require('../lib/reader');

  it('function signature should return undefined', () => {
    const expected = undefined;
    const actual = readFiles(null, () => {});
    
    expect(actual).toBe(expected);

  });

  it('should callback with error', done => {
    readFiles(null, (err) => {
      expect(err instanceof Error).toBe(true);
      done();
    });
  });
  


});