'use strict';

const faker = require('faker');

/**
 * This function takes in a buffer and outputs a buffer that will convert a bmp file to random colors.
 * @param {*} buffer
 */
const soRandom = buffer => {
  if (buffer.byteLength < 1145) {
    throw new Error('`soRandom` Error: Argument buffer must have length of >= 1145.');
  }
  if (typeof buffer !== 'object' || Array.isArray(buffer)) {
    throw new Error('`soRandom` Error: Argument must be a buffer.');
  }

  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 1) {
    const random = faker.random.number({ min: 0, max: 255 });
    buffer[i] = random;
  }

  const output = 'soRandom.bmp';
  const message = 'A Rainbow Exploded!';
  const result = { buffer, message, output };
  return result;
};

module.exports = exports = soRandom;
