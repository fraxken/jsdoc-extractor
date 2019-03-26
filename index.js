// CONSTANTS
const SLASH = "/".charCodeAt(0);
const STAR = "*".charCodeAt(0);

/**
 * @generator
 * @func jsdocExtractor
 * @desc Extract all JSDoc blocks from a Buffer
 * @param {!Buffer} buf Buffer
 * @returns {IterableIterator<Buffer>}
 *
 * @throws {TypeError}
 * @throws {Error}
 */
function* jsdocExtractor(buf) {
    if (!Buffer.isBuffer(buf)) {
        throw new TypeError("buf must be a Node.js Buffer");
    }

    let offset = 0;
    let inBlock = false;
    for (let i = 0; i < buf.length; i++) {
        if (buf[i] === SLASH) {
            if (inBlock === false && buf[i+1] === STAR && buf[i+2] === STAR) {
                inBlock = true;
                offset = i;
            }
            else if(buf[i -1] === STAR) {
                yield buf.slice(offset, i + 1);
                inBlock = false;
            }
        }
    }
}

// Export JSDoc extractor
module.exports = jsdocExtractor;
