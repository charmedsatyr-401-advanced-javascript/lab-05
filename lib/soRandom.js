'use strict';

const faker = require('faker');

const soRandom = buffer => {
  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 4) {
    let random = faker.random.number({
      min: 0,
      max: 255,
    });
    // console.log('random number:', random);
    console.log('buffer before:', buffer[i]);
    buffer[i] = random;
    // console.log('buffer after:', buffer[i]);
  }

  const output = 'soRandom.bmp';
  const message = 'A Rainbow Exploded!';
  const result = { buffer, message, output };
  return result;
};

module.exports = soRandom;
