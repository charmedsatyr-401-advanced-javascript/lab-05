'use strict';

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const angelOfMusic = require('./lib/angelOfMusic.js');
const greyscale = require('./lib/greyscale.js');
const shave = require('./lib/shave.js');
// const randomlyPastel = require('./lib/randomlyPastel.js');
// const soRandom = require('./lib/soRandom.js');

/**
 * Bitmap -- receives a path to a file, used in the transformer to note the new buffer
 * @param {filePath} filePath
 * @constructor
 */
class Bitmap {
  constructor(filePath) {
    this.file = filePath;
  }

  /**
   * Parser -- creates a buffer from `this.file` and will
   * parse through it, according to the specification,
   * creating object properties for each segment of the file
   * @param buffer
   */
  async parse() {
    const buffer = await readFile(`${this.file}`);
    // Create a naked object to model the bitmap properties
    const parsedBitmap = {};

    // Identify the offsets by reading the bitmap docs
    const FILE_SIZE_OFFSET = 2;
    const WIDTH_OFFSET = 18;
    const HEIGHT_OFFSET = 22;
    const BYTES_PER_PIXEL_OFFSET = 28;
    const COLOR_PALLET_OFFSET = 46;
    const COLOR_TABLE_OFFSET = 54;
    const PIXEL_ARRAY_OFFSET = 310;

    //------------------------------------------------------
    // READING INFORMATION FROM THE BITMAP FILE
    //------------------------------------------------------

    parsedBitmap.type = buffer.toString('utf-8', 0, 2);
    parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
    parsedBitmap.bytesPerPixel = buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
    parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
    parsedBitmap.colorPallet = buffer.readInt32LE(COLOR_PALLET_OFFSET);
    parsedBitmap.colorTable = buffer.readInt32LE(COLOR_TABLE_OFFSET);
    parsedBitmap.pixelArray = buffer.readInt32LE(PIXEL_ARRAY_OFFSET);

    const colorTable = buffer.slice(PIXEL_ARRAY_OFFSET);
    const tableOfColors = buffer.slice(COLOR_TABLE_OFFSET, PIXEL_ARRAY_OFFSET);

    // Bottom left boundary = 1146
    // Top right boundary = buffer.length
    // Color table = 121 to 1145 (1145 - 4 * 256)
    // const num = 6111 - 3 * 112;
    //  const blockheight = 400;

    // console.log(parsedBitmap);
    return parsedBitmap;
  }
  /**
   * Transform a bitmap using some set of rules. The operation points to some function,
   * which will operate on a bitmap instance
   * @param operation
   */
  async transform(mode) {
    // console.log('Mode:', mode, '->');
    try {
      const buffer = await readFile(`${this.file}`);

      // console.log('buffer argument:', buffer);

      let transformed;
      switch (mode) {
        // case 'soRandom':
        // case 'random':
        //   transformed = await soRandom(buffer);
        //   break;
        case 'shave':
          transformed = await shave(buffer);
          break;
        case 'angelOfMusic':
        case 'phantom':
          transformed = await angelOfMusic(buffer);
          break;
        case 'grayscale':
        case 'greyscale':
          transformed = await greyscale(buffer);
          break;
        // case 'randomlyPastel':
        // case 'pastel':
        //   transformed = await randomlyPastel(buffer);
        //   break;
        default:
          // console.log(`Something is wrong. Output not modified.`);
          transformed = buffer;
          break;
      }

      writeFile(`${__dirname}/transformations/${transformed.output}`, transformed.buffer);
      console.log(transformed.message);
    } catch (err) {
      console.error('There was an error transforming your file:', err);
    }
  }
}

const baldy = `${__dirname}/assets/baldy.bmp`;
const bitmap = new Bitmap(baldy);

const mode = process.argv[2];
if (!mode) {
  bitmap.parse();
} else if (mode) {
  bitmap.transform(mode);
}

module.exports = Bitmap;
