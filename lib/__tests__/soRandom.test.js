'use strict';

const soRandom = require('../soRandom.js');

describe('`soRandom` function', () => {
  describe('Input validation', () => {
    it('should return defined when it receives a buffer with a length of at least `1145`', () => {
      const buffer = Buffer.from(Array(15000).fill(0));
      expect(soRandom(buffer)).toBeDefined();
    });
    it('should throw an error when it receives a buffer with a length of less than `1145`', () => {
      const buffer = Buffer.from([0]);
      expect(() => soRandom(buffer)).toThrow();
    });
    it('should throw an error when it receives a string argument', () => {
      expect(() => soRandom('hello')).toThrow();
    });
    it('should throw an error when it receives a number argument', () => {
      expect(() => soRandom(15)).toThrow();
    });
    it('should throw an error when it receives an array argument', () => {
      expect(() => soRandom(Array(15000).fill(0))).toThrow();
    });
    it('should throw an error when it receives a function argument', () => {
      expect(() => soRandom(() => {})).toThrow();
    });
    it('should throw an error when it receives an undefined argument', () => {
      expect(() => soRandom(undefined)).toThrow();
    });
    it('should throw an error when it receives a null argument', () => {
      expect(() => soRandom(null)).toThrow();
    });
    it('should throw an error when it receives no argument', () => {
      expect(() => soRandom()).toThrow();
    });
  });

  describe('Output validation', () => {
    const buffer = Buffer.from(Array(15000).fill(0));
    it('should return an object with a `buffer` key', () => {
      expect(soRandom(buffer)).toHaveProperty('buffer');
    });
    it('should return an object with a `message` key', () => {
      expect(soRandom(buffer)).toHaveProperty('message');
    });
    it('should return an object with a `message` key that is a `string`', () => {
      expect(soRandom(buffer).message).toEqual(expect.any(String));
    });
    it('should return an object with an `output` key', () => {
      expect(soRandom(buffer)).toHaveProperty('output');
    });
    it('should return an object with an `output` key that is a `string`', () => {
      expect(soRandom(buffer).output).toEqual(expect.any(String));
    });
  });
});
