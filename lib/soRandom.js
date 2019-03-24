'use strict';

const faker = require('faker');

/**
 * This function takes in a buffer and outputs a buffer that will convert a bmp file to random colors.
 * @param {*} buffer 
 */

let soRandom = (buffer) => {
  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for(let i = END_OF_COLOR_TABLE ; i >= START_OF_COLOR_TABLE ; i-=4 ){
    let random = faker.random.number({
      'min': 0,
      'max': 255,
    });

    buffer[i] = random;
  }

  const output = 'soRandom.bmp';
  const message = 'A Rainbow Exploded!';
  const result = { buffer, message, output };
  return result;

};

module.exports = soRandom;