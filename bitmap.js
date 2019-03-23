'use strict';

const fs = require('fs');
const util = require('util');
const buffer = require('buffer');

// NO, you may not read synchronosly ... this is only for expedience in the demo
const bald = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
console.log('Bald:', bald);

// Create a naked object to model the bitmap properties
const parsedBitmap = {};

// Identify the offsets by reading the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_PALLET_OFFSET = 46;
const COLOR_TABLE_OFFSET = 54; // number of bytes in the color table (color table === pixel array)
const PIXEL_ARRAY_OFFSET = 310; // The actual colors of the image. 256 (color table, a table of colors!) + 54 previous header)

// pixel-array tells you which part of the color table is being used by that pixel.

//------------------------------------------------------
// READING INFORMATION FROM THE BITMAP FILE
//------------------------------------------------------

parsedBitmap.type = bald.toString('utf-8', 0, 2);
parsedBitmap.fileSize = bald.readInt32LE(FILE_SIZE_OFFSET);
parsedBitmap.bytesPerPixel = bald.readInt16LE(BYTES_PER_PIXEL_OFFSET);
parsedBitmap.height = bald.readInt32LE(HEIGHT_OFFSET);
parsedBitmap.width = bald.readInt32LE(WIDTH_OFFSET);
parsedBitmap.colorPallet = bald.readInt32LE(COLOR_PALLET_OFFSET);
parsedBitmap.colorTable = bald.readInt32LE(COLOR_TABLE_OFFSET);
parsedBitmap.pixelArray = bald.readInt32LE(PIXEL_ARRAY_OFFSET);

console.log(parsedBitmap);

const colorTable = bald.slice(PIXEL_ARRAY_OFFSET);
const tableOfColors = bald.slice(COLOR_TABLE_OFFSET, PIXEL_ARRAY_OFFSET);

// Bottom left boundary = 1146
// Top right boundary = bald.length
// Color table = 121 to 1145
let other = 256;
for (let i = 14000; i < bald.length; i++) {
  bald[i] = other;
}

/** top = 1145
 * groups of rgba (4 long)
 * 256 colors
 * 1145 -> 121
 */

let blocks = 12;
for (let i = 1096; i > 1141 - 4 * blocks; i -= 4) {
  bald[i] = 0.5;
  bald[i - 1] = 255; // red
  bald[i - 2] = 165; // blue
  bald[i - 3] = 0; // green
}

// Main skin tone
// bald[1100] = 0; // O
// bald[1099] = 10; // R
// bald[1098] = 255; // B
// bald[1097] = 10; // G

// Make baldy's background and eye 'whites' orange
// bald[1145] = 0.1; // opacity?
// bald[1144] = 255; // red
// bald[1143] = 165; // green
// bald[1142] = 0; // blue

//  unsure
//  bald[1141] = 0; // opacity
//  bald[1140] = 255; // red
//  bald[1139] = 255; // gren
//  bald[1138] = 255; // blue

// ??
// bald[1137] = 0; // opacity
// bald[1136] = 255; // red
// bald[1135] = 0; // green
// bald[1134] = 0; // blu

// Little dots around ears, edges
// bald[1133] = 0;
// bald[1132] = 0; // red
// bald[1131] = 255; // green
// bald[1130] = 0; // blue

// Little dots in the eyes
// bald[1129] = 0;
// bald[1128] = 255; // red
// bald[1127] = 0; // green
// bald[1126] = 0; // blue

// Little dots around face
// bald[1125] = 0;
// bald[1124] = 0; // red
// bald[1123] = 255; // green
// bald[1122] = 0; // blue

// More little dots around face, in eyes
// bald[1121] = 0;
// bald[1120] = 0; // red
// bald[1119] = 255; // green
// bald[1118] = 0; // blue

// Dots in left eye
// bald[1117] = 0;
// bald[1116] = 0; // red
// bald[1115] = 255; // green
// bald[1114] = 0; // blue

// ??
// bald[121] = 1;
// bald[124] = 255;
// bald[123] = 255;
// bald[122] = 255;

// for (let j = index; j >= index - inc; j--) {}

// change each 4th one to 255
// change each 3rd one to 0

console.log('bald[2000]:', bald[2000]);
console.log('bald.length:', bald.length);
fs.writeFile('./test2.bmp', bald, err => {
  if (err) throw err;
});
