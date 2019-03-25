'use strict';

const shave = require('../shave.js');

describe('`shave` function', () => {
  describe('Input validation', () => {
    it('should return defined when it receives a buffer with a length of at least `4345`', () => {
      const buffer = Buffer.from(Array(15000).fill(0));
      expect(shave(buffer)).toBeDefined();
    });
    it('should throw an error when it receives a buffer with a length of less than `4345`', () => {
      const buffer = Buffer.from([0]);
      expect(() => shave(buffer)).toThrow();
    });
    it('should throw an error when it receives a string argument', () => {
      expect(() => shave('hello')).toThrow();
    });
    it('should throw an error when it receives a number argument', () => {
      expect(() => shave(15)).toThrow();
    });
    it('should throw an error when it receives an array argument', () => {
      expect(() => shave(Array(15000).fill(0))).toThrow();
    });
    it('should throw an error when it receives a function argument', () => {
      expect(() => shave(() => {})).toThrow();
    });
    it('should throw an error when it receives an undefined argument', () => {
      expect(() => shave(undefined)).toThrow();
    });
    it('should throw an error when it receives a null argument', () => {
      expect(() => shave(null)).toThrow();
    });
    it('should throw an error when it receives no argument', () => {
      expect(() => shave()).toThrow();
    });
  });

  describe('Output validation', () => {
    const buffer = Buffer.from(Array(15000).fill(0));
    it('should return an object with a `buffer` key', () => {
      expect(shave(buffer)).toHaveProperty('buffer');
    });
    it('should return an object with a `buffer` key that includes at least 156 `244` references', () => {
      const transformed = shave(buffer);
      const arr = [...transformed.buffer];
      expect(arr.filter(n => n === 244).length).toBeGreaterThanOrEqual(156);
    });
    it('should return an object with a `message` key', () => {
      expect(shave(buffer)).toHaveProperty('message');
    });
    it('should return an object with a `message` key that is a `string`', () => {
      expect(shave(buffer).message).toEqual(expect.any(String));
    });

    it('should return an object with an `output` key', () => {
      expect(shave(buffer)).toHaveProperty('output');
    });
    it('should return an object with an `output` key that is a `string`', () => {
      expect(shave(buffer).output).toEqual(expect.any(String));
    });
  });
});
