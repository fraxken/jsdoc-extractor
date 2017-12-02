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

console.log(jsdocExtractor(new Buffer(jsdocAnnotations)));