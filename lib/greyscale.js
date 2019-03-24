'use strict';

let greyscale = buffer => {
  const END_OF_COLOR_TABLE = 1145;
  const START_OF_COLOR_TABLE = 121;

  for (let i = END_OF_COLOR_TABLE; i >= START_OF_COLOR_TABLE; i -= 4) {
    console.log('buffer before:', buffer[i]);
    let greyscaleCalc = (buffer[i - 1] + buffer[i - 2] + buffer[i - 3]) / 4;
    buffer[i] = 0;
    buffer[i - 1] = greyscaleCalc;
    buffer[i - 2] = greyscaleCalc;
    buffer[i - 3] = greyscaleCalc;
  }

  const output = 'greyscale.bmp';
  const message = 'Where did all of the colors go?';
  const result = { buffer, message, output };
  return result;
};

module.exports = greyscale;
