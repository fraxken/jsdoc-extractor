/// <reference types="node" />

declare function jsdocExtractor(buf: Buffer): IterableIterator<Buffer>;

export = jsdocExtractor;
