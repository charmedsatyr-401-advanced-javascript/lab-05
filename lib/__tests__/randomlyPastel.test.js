'use strict';

const randomlyPastel = require('../randomlyPastel.js');

describe('`randomlyPastel` function', () => {
  describe('Input validation', () => {
    it('should return defined when it receives a buffer with a length of at least `1145`', () => {
      const buffer = Buffer.from(Array(15000).fill(0));
      expect(randomlyPastel(buffer)).toBeDefined();
    });
    it('should throw an error when it receives a buffer with a length of less than `1145`', () => {
      const buffer = Buffer.from([0]);
      expect(() => randomlyPastel(buffer)).toThrow();
    });
    it('should throw an error when it receives a string argument', () => {
      expect(() => randomlyPastel('hello')).toThrow();
    });
    it('should throw an error when it receives a number argument', () => {
      expect(() => randomlyPastel(15)).toThrow();
    });
    it('should throw an error when it receives an array argument', () => {
      expect(() => randomlyPastel(Array(15000).fill(0))).toThrow();
    });
    it('should throw an error when it receives a function argument', () => {
      expect(() => randomlyPastel(() => {})).toThrow();
    });
    it('should throw an error when it receives an undefined argument', () => {
      expect(() => randomlyPastel(undefined)).toThrow();
    });
    it('should throw an error when it receives a null argument', () => {
      expect(() => randomlyPastel(null)).toThrow();
    });
    it('should throw an error when it receives no argument', () => {
      expect(() => randomlyPastel()).toThrow();
    });
  });

  describe('Output validation', () => {
    const buffer = Buffer.from(Array(15000).fill(0));
    it('should return an object with a `buffer` key', () => {
      expect(randomlyPastel(buffer)).toHaveProperty('buffer');
    });
    it('should return an object with a `message` key', () => {
      expect(randomlyPastel(buffer)).toHaveProperty('message');
    });
    it('should return an object with a `message` key that is a `string`', () => {
      expect(randomlyPastel(buffer).message).toEqual(expect.any(String));
    });

    it('should return an object with an `output` key', () => {
      expect(randomlyPastel(buffer)).toHaveProperty('output');
    });
    it('should return an object with an `output` key that is a `string`', () => {
      expect(randomlyPastel(buffer).output).toEqual(expect.any(String));
    });
  });
});
