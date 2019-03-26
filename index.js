'use strict';

// CHAR CONSTANTS
const CHAR = {
    slash: '/'.charCodeAt(0),
    star:  '*'.charCodeAt(0)
};

/**
 * @func jsdocExtractor
 * @param {Buffer} buf 
 * @returns {String[]}
 */
function jsdocExtractor(buf) {
    if (!Buffer.isBuffer(buf)) {
        throw new TypeError('buf should be a buffer');
    }
    const jsdoc = [];
    let offset = 0, inBlock = false, i = 0;
    for (i = 0; i < buf.length; i++) {
        if (buf[i] === CHAR.slash) {
            if (!inBlock && buf[i+1] === CHAR.star && buf[i+2] === CHAR.star) {
                inBlock = true;
                offset = i; 
            }
            else if(buf[i -1] === CHAR.star) {
                jsdoc.push(buf.slice(offset, i + 1).toString());
                inBlock = false;
            }
        }
    }
    if (inBlock) {
        throw new Error('Unclosed JSDoc detected!');
    }
    return jsdoc;
}

// Export JSDoc extractor
module.exports = jsdocExtractor;