/// <reference types="node" />

declare function jsdocExtractor(buf: Buffer): IterableIterator<[Buffer, number, number]>;

export = jsdocExtractor;
