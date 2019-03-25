'use strict';

const faker = require('faker');

/**
 * This function takes in a buffer and outputs a buffer that will convert a bmp file to random pastel colors.
 * @param {*} buffer
 */
const randomlyPastel = buffer => {
  if (buffer.byteLength < 1145) {
    throw new Error('`randomlyPastel` Error: Argument buffer must have length of >= 1145.');
  }
  if (typeof buffer !== 'object' || Array.isArray(buffer)) {
    throw new Error('`randomlyPastel` Error: Argument must be a buffer.');
  }

  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 1) {
    let random = faker.random.number({
      min: 160,
      max: 240,
    });

    buffer[i] = random;
  }

  const output = 'randomlyPastel.bmp';
  const message = 'I feel so colorfully faded';
  const result = { buffer, message, output };
  return result;
};

module.exports = randomlyPastel;
