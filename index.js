'use strict';

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const shave = require('./lib/shave.js');

const args = process.argv.slice(0, 3);

const buffer = fs.readFileSync(`${__dirname}/assets/baldy.bmp`, err => {
  if (err) {
    console.error(err);
  }
  console.log('Reading...');
});

const mode = args[2];
console.log('Mode:', mode, '->');

let transformed;

switch (mode) {
  case 'shave':
    transformed = shave(buffer);
    break;
}

writeFile(`${__dirname}/${transformed.file}`, transformed.buffer)
  .then(data => console.log(transformed.message))
  .catch(console.error);
