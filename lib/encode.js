'use strict';

var randomByte = require('./random/random-byte');

function encode(lookup, number) {
	// console.log("encode--", number);
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (1 * loopCounter)) & 0x0f ) | randomByte() );        
        done = number < (Math.pow(16, loopCounter + 8 ) );
        // console.log("n :", number, "v :", loopCounter, "l :", (Math.pow(16, loopCounter + 16 ) ));
        loopCounter++;
    }
    // console.log("string enc--", str);
    return str;

}

module.exports = encode;
