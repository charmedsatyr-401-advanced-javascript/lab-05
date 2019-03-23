'use strict';

const shave = buffer => {
  console.log('Ordered a shave! ->');
  // Shave John
  let newReference = 244;
  const linewidth = 112; //110 // Each line is 112 pixels wide
  const start = 4332;
  const end = 4345;
  const patchHeight = 12;
  for (let j = 0; j < patchHeight; j++) {
    for (let i = start; i < end; i++) {
      buffer[i + linewidth * j] = newReference;
    }
  }

  const output = 'shaved.bmp';
  const message = 'Shaved John!';
  const result = { buffer, message, output };
  return result;
};

module.exports = shave;
