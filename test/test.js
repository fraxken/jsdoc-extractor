"use strict";

// Require Third-party Dependencies
const ava = require("ava");
const is = require("@slimio/is");

// Require Internal
const jsdocExtractor = require("../index");

ava("test export", (assert) => {
    assert.true(is.generatorFunction(jsdocExtractor));
});

ava("extract two blocks", (assert) => {
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
    assert.true(is.iterable(it));
    for (const block of it) {
        assert.true(Array.isArray(block));
        assert.true(Buffer.isBuffer(block[0]));
        assert.true(typeof block[1] === "number");
        assert.true(typeof block[2] === "number");
    }
});
