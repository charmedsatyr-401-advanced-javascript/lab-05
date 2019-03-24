'use strict';

const greyscale = require('../greyscale.js');

describe('`greyscale` function', () => {
  describe('Input validation', () => {
    it('should return defined when it receives a buffer with a length of at least `1145`', () => {
      const buffer = Buffer.from(Array(15000).fill(0));
      expect(greyscale(buffer)).toBeDefined();
    });
    it('should throw an error when it receives a buffer with a length of less than `1145`', () => {
      const buffer = Buffer.from([0]);
      expect(() => greyscale(buffer)).toThrow();
    });
    it('should throw an error when it receives a string argument', () => {
      expect(() => greyscale('hello')).toThrow();
    });
    it('should throw an error when it receives a number argument', () => {
      expect(() => greyscale(15)).toThrow();
    });
    it('should throw an error when it receives an array argument', () => {
      expect(() => greyscale([15])).toThrow();
    });
    it('should throw an error when it receives a function argument', () => {
      expect(() => greyscale(() => {})).toThrow();
    });
    it('should throw an error when it receives an undefined argument', () => {
      expect(() => greyscale(undefined)).toThrow();
    });
    it('should throw an error when it receives a null argument', () => {
      expect(() => greyscale(null)).toThrow();
    });
    it('should throw an error when it receives no argument', () => {
      expect(() => greyscale()).toThrow();
    });
  });

  describe('Output validation', () => {
    const buffer = Buffer.from(Array(15000).fill(0));
    it('should return an object with a `buffer` key', () => {
      expect(greyscale(buffer)).toHaveProperty('buffer');
    });
    it('should return an object with a `buffer` key that includes references to input RGB averages for each block', () => {
      const bufferToGreyscale = Buffer.from(Array(1145).fill(0));
      bufferToGreyscale[1142] = 1;
      bufferToGreyscale[1143] = 2;
      bufferToGreyscale[1144] = 3;
      const transformed = [...greyscale(bufferToGreyscale).buffer];

      [(1142, 1143, 1144)].forEach(n => {
        expect(transformed[n]).toBe(2);
      });
    });
    it('should return an object with a `message` key', () => {
      expect(greyscale(buffer)).toHaveProperty('message');
    });
    it('should return an object with a `message` key that is a `string`', () => {
      expect(greyscale(buffer).message).toEqual(expect.any(String));
    });

    it('should return an object with an `output` key', () => {
      expect(greyscale(buffer)).toHaveProperty('output');
    });
    it('should return an object with an `output` key that is a `string`', () => {
      expect(greyscale(buffer).output).toEqual(expect.any(String));
    });
  });
});
