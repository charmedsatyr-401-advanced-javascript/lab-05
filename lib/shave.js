'use strict';

/* This function takes a buffer and removes the soul patch on
 * John's face, replacing it with plain skin tones.
 * @param  {buffer} buffer
 */
const shave = buffer => {
  if (buffer.byteLength < 4345) {
    throw new Error('`shave` Error: Argument buffer must have length of >= 4345.');
  }
  if (typeof buffer !== 'object' || Array.isArray(buffer)) {
    throw new Error('`shave` Error: Argument must be a buffer.');
  }

  console.log('Ordered a shave! ->');

  const skinColorReference = 244;
  const linewidth = 112; // Each line of baldy.bmp is 112 pixels wide

  const start = 4332; // Block to start transforming at
  const end = 4345; // Block to end transforming at

  const patchHeight = 12; // How many rows the soul patch takes up

  // Loop through and change the color reference of each pixel
  // in the square identified as the soul patch to skin color
  for (let j = 0; j < patchHeight; j++) {
    for (let i = start; i < end; i++) {
      buffer[i + linewidth * j] = skinColorReference;
    }
  }

  // Return an object with output file, message, and buffer properties
  const output = 'shaved.bmp';
  const message = 'Shaved John!';
  const result = { buffer, message, output };
  return result;
};

module.exports = shave;
