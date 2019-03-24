'use strict';

const Bitmap = require('../index.js');
const baldy = `${__dirname}/../assets/baldy.bmp`;

describe('`Bitmap` class', () => {
  describe('`parse` method', () => {
    const bitmap = new Bitmap(baldy);
    it('should return an object', async () => {
      const parsed = await bitmap.parse();
      expect(typeof parsed === 'object').toBeTruthy();
    });
    it('should return an object with a `fileSize` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('fileSize');
    });
    it('should return an object with a `fileSize` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { fileSize } = parsed;
      expect(fileSize).toEqual(expect.any(Number));
    });
    it('should return an object with a `bytesPerPixel` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('bytesPerPixel');
    });
    it('should return an object with a `bytesPerPixel` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { bytesPerPixel } = parsed;
      expect(bytesPerPixel).toEqual(expect.any(Number));
    });
    it('should return an object with a `height` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('height');
    });
    it('should return an object with a `height` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { height } = parsed;
      expect(height).toEqual(expect.any(Number));
    });
    it('should return an object with a `width` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('width');
    });
    it('should return an object with a `width` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { width } = parsed;
      expect(width).toEqual(expect.any(Number));
    });
    it('should return an object with a `colorPallet` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('colorPallet');
    });
    it('should return an object with a `colorPallet` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { colorPallet } = parsed;
      expect(colorPallet).toEqual(expect.any(Number));
    });
    it('should return an object with a `colorTable` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('colorTable');
    });
    it('should return an object with a `colorTable` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { colorTable } = parsed;
      expect(colorTable).toEqual(expect.any(Number));
    });
    it('should return an object with a `pixelArray` key', async () => {
      const parsed = await bitmap.parse();
      expect(parsed).toHaveProperty('pixelArray');
    });
    it('should return an object with a `pixelArray` key that has a number value', async () => {
      const parsed = await bitmap.parse();
      const { pixelArray } = parsed;
      expect(pixelArray).toEqual(expect.any(Number));
    });
  });

  describe('`transform` method', () => {
    const bitmap = new Bitmap(baldy);
    xit('should be good...', async () => {});
  });
});
