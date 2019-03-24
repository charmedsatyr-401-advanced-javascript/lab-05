'use strict';

const Bitmap = require('../index.js');

describe('`Bitmap` class', () => {
  it('should return an object with a `type` key that has a number value', async () => {
    try {
      const bitmap = new Bitmap(`../assets/baldy.bmp`);
      const type = await bitmap.parse().type;
      await expect(type).resolves.toBeDefined();
    } catch (err) {
      console.error(err);
    }
  });
});

// describe('`parse` method', () => {});

//     xit('should return an object with a `fileSize` key that has a number value', () => {});
//     xit('should return an object with a `bytesPerPixel` key that has a number value', () => {});
//     xit('should return an object with a `height` key that has a number value', () => {});
//     xit('should return an object with a `width` key that has a number value', () => {});
//     xit('should return an object with a `colorPallet` key that has a number value', () => {});
//     xit('should return an object with a `colorTable` key that has a number value', () => {});
//     xit('should return an object with a `pixelArray` key that has a number value', () => {});
// });
//   describe('`transform` method', () => {
//     it('should...');
//   });
