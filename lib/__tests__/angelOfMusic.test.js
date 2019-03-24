'use strict';

const angelOfMusic = require('../angelOfMusic.js');

describe('`angelOfMusic` function', () => {
  describe('Input validation', () => {
    it('should return defined when it receives a buffer with a length of at least `14428`', () => {
      const buffer = Buffer.from(Array(15000).fill(0));
      expect(angelOfMusic(buffer)).toBeDefined();
    });
    it('should throw an error when it receives a buffer with a length of less than `14428`', () => {
      const buffer = Buffer.from([0]);
      expect(() => angelOfMusic(buffer)).toThrow();
    });
    it('should throw an error when it receives a string argument', () => {
      expect(() => angelOfMusic('hello')).toThrow();
    });
    it('should throw an error when it receives a number argument', () => {
      expect(() => angelOfMusic(15)).toThrow();
    });
    it('should throw an error when it receives an array argument', () => {
      expect(() => angelOfMusic(Array(15000).fill(0))).toThrow();
    });
    it('should throw an error when it receives a function argument', () => {
      expect(() => angelOfMusic(() => {})).toThrow();
    });
    it('should throw an error when it receives an undefined argument', () => {
      expect(() => angelOfMusic(undefined)).toThrow();
    });
    it('should throw an error when it receives a null argument', () => {
      expect(() => angelOfMusic(null)).toThrow();
    });
    it('should throw an error when it receives no argument', () => {
      expect(() => angelOfMusic()).toThrow();
    });
  });

  describe('Output validation', () => {
    const buffer = Buffer.from(Array(15000).fill(0));
    it('should return an object with a `buffer` key', () => {
      expect(angelOfMusic(buffer)).toHaveProperty('buffer');
    });
    it('should return an object with a `buffer` key that includes `247` references at least between blocks 14408 and 14428', () => {
      let angelBuffer = Buffer.from(Array(15000).fill(0));
      const makeRange = (start, end) =>
        Array(end - start + 1)
          .fill()
          .map((_, idx) => start + idx);
      const range = makeRange(14408, 14428);
      const transformed = angelOfMusic(buffer);
      const arr = [...transformed.buffer];
      range.forEach(n => {
        expect(arr[n]).toBe(247);
      });
    });
    it('should return an object with a `message` key', () => {
      expect(angelOfMusic(buffer)).toHaveProperty('message');
    });
    it('should return an object with a `message` key that is a `string`', () => {
      expect(angelOfMusic(buffer).message).toEqual(expect.any(String));
    });
    it('should return an object with an `output` key', () => {
      expect(angelOfMusic(buffer)).toHaveProperty('output');
    });
    it('should return an object with an `output` key that is a `string`', () => {
      expect(angelOfMusic(buffer).output).toEqual(expect.any(String));
    });
  });
});
