'use strict';

const faker = require('faker');

const randomlyPastel = buffer => {
  const arr = [...buffer];
  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 4) {
    let random = faker.random.number({
      min: 160,
      max: 240,
    });

    arr[i] = random;
  }
  const out = Buffer.from(arr);

  const output = 'randomlyPastel.bmp';
  const message = 'I feel so colorfully faded';
  const result = { buffer: out, message, output };
  return result;
};

module.exports = randomlyPastel;
