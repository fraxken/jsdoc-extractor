# jsdoc-extractor
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/fraxken/jsdoc-extractor/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/fraxken/jsdoc-extractor/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![size](https://img.shields.io/bundlephobia/min/jsdoc-extractor.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/fraxken/jsdoc-extractor/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fraxken/jsdoc-extractor?targetFile=package.json)
[![Build Status](https://travis-ci.com/fraxken/jsdoc-extractor.svg?branch=master)](https://travis-ci.com/fraxken/jsdoc-extractor)

Fast JSDoc extractor with no dependencies (parse the Buffer).

## Requirements
- Node.js v14 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i jsdoc-extractor
# or
$ yarn add jsdoc-extractor
```

## Usage example
```js
const jsdocExtractor = require("jsdoc-extractor");
const { readFileSync } = require("fs");

const buf = readFileSync("./sourceCode.js");
for (const [doc, start, end] of jsdocExtractor(buf)) {
    console.log(`Found a new JSDoc block between ${start} and ${end}`);
    console.log(doc.toString());
    console.log("-------------");
}
```

## API

### jsdocExtractor(buf: Buffer): IterableIterator< [Buffer, number, number] >
Take a buffer as Argument and return a Synchronous Iterator. The value returned by the iterator is the following:
```
[buffer, start, end]
```

Where **start** and **end** are the offset to retrieve (slice) the original Buffer.

## Related projects

| name | description |
| --- | --- |
| [jsdoc-tokenizer](https://github.com/fraxken/jsdoc-tokenizer) | Tokenizer for JSDoc blocks |

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
