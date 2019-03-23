'use strict';

const fs = require('fs');
const util = require('util');
const buffer = require('buffer');

// NO, you may not read synchronosly ... this is only for expedience in the demo
const bald = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
// console.log('Bald:', bald);

// Create a naked object to model the bitmap properties
const parsedBitmap = {};

// Identify the offsets by reading the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_PALLET_OFFSET = 46;
const COLOR_TABLE_OFFSET = 54; // number of bytes in the color table
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

// console.log(parsedBitmap);

const colorTable = bald.slice(PIXEL_ARRAY_OFFSET);
const tableOfColors = bald.slice(COLOR_TABLE_OFFSET, PIXEL_ARRAY_OFFSET);

// Bottom left boundary = 1146
// Top right boundary = bald.length
// Color table = 121 to 1145 (1145 - 4 * 256)
// const num = 6111 - 3 * 112;
//  const blockheight = 400;

// Determine number of rows needed
let newReference = 244;



console.log('colorRef: ', bald[3544])

/*
for (let i = num + linewidth; i < num + blockheight + linewidth; i++) {
  bald[i] = other;
}
for (let i = num + 2 * linewidth; i < num + blockheight + 2 * linewidth; i++) {
  bald[i] = other;
}
for (let i = num + 3 * linewidth; i < num + blockheight + 3 * linewidth; i++) {
  bald[i] = other;
}
*/
/** top = 1145
 * groups of rgba (4 long)
 * 256 colors
 * 1145 -> 121
 */

// let blocks = 60;
// for (let i = 1041; i > 1041 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// Make baldy's background and eye 'whites' orange
// bald[1145] = 0.1; // opacity?
// bald[1144] = 255; // red
// bald[1143] = 165; // green
// bald[1142] = 0; // blue

// ??
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

// Dots on lower face and shoulders
// bald[1113] = 0;
// bald[1112] = 0; // red
// bald[1111] = 255; // green
// bald[1110] = 0; // blue

// One dot, right eye
// bald[1109] = 0;
// bald[1108] = 0; // red
// bald[1107] = 255; // green
// bald[1106] = 0; // blue

// Dots on edge of face, in eye
// bald[1105] = 0;
// bald[1104] = 0; // red
// bald[1103] = 255; // green
// bald[1102] = 0; // blue

// Main face color
// bald[1101] = 0;
// bald[1100] = 255; // red
// bald[1099] = 0; // green
// bald[1098] = 25; // blue

// Dots within face, nose
// bald[1097] = 0;
// bald[1096] = 0; // red
// bald[1095] = 255; // green
// bald[1094] = 0; // blue

// Beard/goatee/soul patch!
// bald[1093] = 0;
// bald[1092] = 0; // red
// bald[1091] = 255; // green
// bald[1090] = 0; // blue

// Many dots within face
// bald[1089] = 0;
// bald[1088] = 0; // red
// bald[1087] = 255; // green
// bald[1086] = 0; // blue

// Dots on face
// bald[1085] = 0;
// bald[1084] = 0; // red
// bald[1083] = 255; // green
// bald[1082] = 0; // blue

// Dots around goatee
// bald[1081] = 0;
// bald[1080] = 0; // red
// bald[1079] = 255; // green
// bald[1078] = 0; // blue

// Wrinkles on face
// bald[1077] = 0;
// bald[1076] = 0; // red
// bald[1075] = 255; // green
// bald[1074] = 0; // blue

// One dot in eye
// bald[1073] = 0;
// bald[1072] = 0; // red
// bald[1071] = 255; // green
// bald[1070] = 0; // blue

// Wrinkles on face
// bald[1069] = 0;
// bald[1068] = 0; // red
// bald[1067] = 255; // green
// bald[1066] = 0; // blue

// Around beard, misc.
// bald[1065] = 0;
// bald[1064] = 0; // red
// bald[1063] = 255; // green
// bald[1062] = 0; // blue

// ??
// bald[1061] = 0;
// bald[1060] = 0; // red
// bald[1059] = 255; // green
// bald[1058] = 0; // blue

// Around goatee, mouth
// bald[1057] = 0;
// bald[1056] = 0; // red
// bald[1055] = 255; // green
// bald[1054] = 0; // blue

// Under goatee
// bald[1053] = 0;
// bald[1052] = 0; // red
// bald[1051] = 255; // green
// bald[1050] = 0; // blue

// Side of head, around eye, brow
// bald[1049] = 0;
// bald[1048] = 0; // red
// bald[1047] = 255; // green
// bald[1046] = 0; // blue

// Dot within left eye
// bald[1045] = 0;
// bald[1044] = 0; // red
// bald[1043] = 255; // green
// bald[1042] = 0; // blue

// Additional blocks on outline, around goatee,
// around eyes, forehead
// let blocks = 60;
// for (let i = 1041; i > 1041 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// This series largely colors the inner shirt
// It also outlines the nose, eyebrows
// let blocks = 40;
// for (let i = 801; i > 801 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// More outlines of mouth line, shirt, eye
// let blocks = 40;
// for (let i = 641; i > 641 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// This includes some outline throughout but nearly ALL of eye color
// let blocks = 40;
// for (let i = 481; i > 481 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// Eyebrows interior and outside of shirt (dark part).
// Assorted other outlines
// let blocks = 40;
// for (let i = 321; i > 321 - 4 * blocks; i -= 4) {
//   bald[i] = 0;
//   bald[i - 1] = 0; // red
//   bald[i - 2] = 255; // blue
//   bald[i - 3] = 0; // green
// }

// Very dark colors - pupils, interior fo facial outline
// Includes solid black.
/*
let blocks = 1;
for (let i = 161; i > 161 - 4 * blocks; i -= 4) {
  console.log('a:', bald[i]);
  bald[i] = 0;
  console.log('r:', bald[i]);
  bald[i - 1] = 0; // red
  console.log('b:', bald[i]);
  bald[i - 2] = 255; // blue
  console.log('g:', bald[i]);
  bald[i - 3] = 0; // green
}
*/
// End
/*
fs.writeFile('./test2.bmp', bald, err => {
  if (err) throw err;
  console.log('Wrote file!');
});
*/