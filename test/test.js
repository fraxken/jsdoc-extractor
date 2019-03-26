const jsdocExtractor = require('../index');

const jsdocAnnotations = `
/**
 * @class test
 * @classdesc xd
 */

 /**
  * @class xd
  */
`;

const it = jsdocExtractor(Buffer.from(jsdocAnnotations));
for (const block of it) {
    console.log(block.toString());
    console.log("-----");
}
