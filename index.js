'use strict';

const Bitmap = require('./lib/bitmap.js');

const baldy = `${__dirname}/assets/baldy.bmp`;
const bitmap = new Bitmap(baldy);

const mode = process.argv[2];

// CLI
mode ? bitmap.transform(mode) : bitmap.parse();
