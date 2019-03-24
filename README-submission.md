![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Bitmap Transformer

### Author: Erin Trainor and Joseph Wolfe

### Links and Resources
* [pull request](http://xyz.com)
* [travis](https://www.travis-ci.com/401-advanced-javascript-401d29) [![Build Status](https://www.travis-ci.com/401-advanced-javascript-401d29/lab-05.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-401d29/lab-05)

#### Documentation
* [jsdoc](docs/index.html)

### Modules
#### `angelOfMusic.js`
  * angelOfMusic( );
#### `greyscale.js`
  * greyscale( );
#### `shave.js`
  * shave( );
#### `soRandom.js`
  * soRandom( );
#### `randomlyPastel.js`
  * randomlyPastel( );
#### `index.js`
  * parse( );
  * transform( );

##### Exported Values and Methods

###### `angelOfMusic(buffer) -> message, output, buffer ` -->
  * command to run: node index.js 'angelOfMusic'
  * output: 'phantom.bmp'
  * console message: "Love me - that's all I ask of you."
  * File output location: /transformations/angelofMusic.bmp

###### `greyscale(buffer) -> message, output, buffer` -->
  * command to run: node index.js 'greyscale'
  * output: 'greyscale.bmp'
  * console message: 'Where did all of the colors go?';
  * File output location: /transformations/greyscale.bmp

###### `shave(buffer) -> message, output, buffer` -->
  * command to run: node index.js 'shave'
  * output: 'shaved.bmp'
  * first console message: 'Ordered a shave!' 
  * second console message: 'Shaved John!'
  * File output location: /transformations/shave.bmp

###### `randomlyPastel(buffer) -> message, output, buffer` -->
  * command to run: node index.js 'randomlyPastel'
  * output: 'randomlyPastel.bmp';
  * console message: 'I feel so colorfully faded';
  * File output location: /transformations/randomlyPastel.bmp

###### `soRandom(buffer) -> message, output, buffer` -->
  * command to run: node index.js 'soRandom'
  * output: 'soRandom.bmp';
  * console message: 'A Rainbow Exploded!';
  * File output location: /transformations/soRandom.bmp

###### `parse( ) -> parsedBitMap` --> Object
  * Object Keys
    * type: 'string'
    * fileSize: number
    * bytesPerPixel: number
    * height: number
    * width: number
    * colorPallet: number
    * colorTable: number
    * pixelArray: number

###### `transform(mode) -> writes a file` -->
  * takes in a mode from the command line
    * switch statement in the function determines the file to be writen

#### Running the app
* `node index.html filename`
  * See filenames in methods above

#### Tests
* How do you run tests?
  * npm runt test
* What assertions were made?
  * Method Generic Tests
    * Input Tests
      * Should return defined when it receives a buffer with a length of at least `4345`
      * Should throw an error when it receives a buffer with a length of less than `4345`
      * Should throw an error when it receives a string argument
      * Should throw an error when it receives a number argument
      * Should throw an error when it receives an array argument
      * Should throw an error when it receives a function argument
      * Should throw an error when it receives an undefined argument
      * Should throw an error when it receives a null argument
      * Should throw an error when it receives no argument
    * Output Tests
      * Should return an object with a `buffer` key
      * Should return an object with a `message` key
      * Should return an object with a `message` key that is a `string`
      * Should return an object with an `output` key
      * Should return an object with an `output` key that is a `string`
  * Method Specific Tests
    * shave.test.js
      * Return an object with a buffer key that contains at least 156 244 references
    * angelOfMusic.js
      * Return an object with a buffer key that contains 247 references between the 14408th and 14428th pixel (buffer index)
    * greyscale.js
      * Return an object where the buffer indices at 1144, 1143, and 1142 have been changed to the calculation of the average of their values.
    * index.js - parse( )
      * Should return an object
      * Should return an object with a `fileSize` key
      * Should return an object with a `fileSize` key that has a number value
      * Should return an object with a `bytesPerPixel` key
      * Should return an object with a `bytesPerPixel` key that has a number value
      * Should return an object with a `height` key
      * Should return an object with a `height` key that has a number value
      * Should return an object with a `width` key
      * Should return an object with a `width` key that has a number value
      * Should return an object with a `colorPallet` key
      * Should return an object with a `colorPallet` key that has a number value
      * Should return an object with a `colorTable` key
      * Should return an object with a `colorTable` key that has a number value
      * Should return an object with a `pixelArray` key
      * Should return an object with a `pixelArray` key that has a number value
* What assertions need to be / should be made?
  * Currently the soRandom and randomlyPastel methods are not correctly writing the files when passed through the transform method. Tests will be needed.
  * Index.js
    * Bitmap Class may need imput validation but not sure how to test.
    * Still need transform tests that use a mock for fs.


#### UML
![UML IMAGE](../lab-05/lib/assets/bitmap_uml.jpg)
