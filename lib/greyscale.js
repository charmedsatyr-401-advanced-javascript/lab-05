'use strict';

const faker = require('faker');

// generate random numbers for all the indices of the buffer
// to test it, if you move bacwards through buffer,
//

/**
 * This function takes in a buffer and outputs a buffer that will convert a bmp file to greyscale.
 * @param {*} buffer
 */
const greyscale = buffer => {
  if (buffer.byteLength < 1145) {
    throw new Error('`greyscale` Error: Argument buffer must have length of >= 1145.');
  }
  if (typeof buffer !== 'object' || Array.isArray(buffer)) {
    throw new Error('`greyscale` Error: Argument must be a buffer.');
  }

  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 4) {
    const avg = [buffer[i - 1], buffer[i - 2], buffer[i - 3]].reduce((acc, curr) => acc + curr) / 3;
    buffer[i] = 0;
    buffer[i - 1] = avg;
    buffer[i - 2] = avg;
    buffer[i - 3] = avg;
  }

  const output = 'greyscale.bmp';
  const message = 'Where did all of the colors go?';
  const result = { buffer, message, output };
  return result;
};

module.exports = greyscale;
