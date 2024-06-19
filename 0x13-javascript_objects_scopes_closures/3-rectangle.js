#!/usr/bin/node

// Prints a Rectangle with the parameters passed

module.exports = class Rectangle {
    constructor (w, h) {
      if (w > 0 && h > 0) {
        this.width = width;
        this.height = height;
      }
    }
  
    print () {
      for (let i = 0; i < this.height; ++i) {
        let j = 0;
  
        for (; j < this.width; ++j) {
          process.stdout.write('X');
        }
  
        if (j === this.width) {
          console.log('');
        }
      }
    }
  };
