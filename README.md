<p align="center"><h1 align="center">
  jsdoc-extractor
</h1>

<p align="center">
  Fast JSDoc extractor with no dependencies (parsing directly from Buffer input).
</p>

<p align="center">
<img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/fraxken/jsdoc-extractor/master/package.json&amp;query=$.version&amp;label=Version" alt="version">
<a href="https://github.com/fraxken/jsdoc-extractor/commit-activity">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintenance">
</a>
<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="MIT">
<img src="https://img.shields.io/bundlephobia/min/jsdoc-extractor.svg" alt="size">
<a href="https://snyk.io/test/github/fraxken/jsdoc-extractor?targetFile=package.json">
  <img src="https://snyk.io/test/github/fraxken/jsdoc-extractor/badge.svg?targetFile=package.json" alt="Known Vulnerabilities">
</a>
<a href="https://github.com/fraxken/jsdoc-extractor">
  <img src="https://img.shields.io/github/workflow/status/fraxken/jsdoc-extractor/Node.js%20CI" alt="githubaction">
</a>
</p>


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
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/fraxken/jsdoc-extractor/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/fraxken/jsdoc-extractor/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/fraxken/jsdoc-extractor/issues?q=author%3Afraxken" title="Bug reports">🐛</a> <a href="#security-fraxken" title="Security">🛡️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
