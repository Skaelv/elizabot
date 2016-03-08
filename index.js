/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module alex
 * @fileoverview
 *   alex checks your (or someone else’s) writing for possible
 *   inconsiderate wording.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var VFile = require('vfile');
var remark = require('remark');
var retext = require('retext');
var control = require('remark-message-control');
var english = require('retext-english');
var styleguide = require('retext-styleguide');
var usage = require('retext-usage');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var profanities = require('retext-profanities');
var remark2retext = require('remark-retext');
var sort = require('vfile-sort');

/*
 * Overrides.
 */

var simplifyConfig = {
    ignore: [
        'address', // customer info
        'request', // technical
        'interface', // technical
        'render', // technical
        'forward', // technical
        'maximum', // technical
        'minimum', // technical
        'type', // technical
        'initial', // technical
        'selection', // technical
        'contains', // technical
        'implement', // technical
        'parameters', // technical
        'function', // technical
        'option', // technical
        'effect', // technical
        'submit', // technical
        'additional', // sales
        'might', // may does not have the same connotation
        'multiple', // many is not equivalent
        'equivalent', // equal does not have the same connotation
        'combined', // no good alternative
        'provide', // not complicated
        'delete', // frequent UI text
        'it is', // no good alternative
        'there are', // no good alternative
        'require' // technical
    ]
};

var equalityConfig = {
   ignore: [
       'disabled', // technical
       'host' // technical
   ]
};

/*
 * Processor.
 */

var text = retext()
    .use(english)
    .use(styleguide)
    .use(usage)
    .use(simplify, simplifyConfig)
    .use(equality, equalityConfig)
    .use(profanities);

/**
 * alex’s core.
 *
 * @param {string|VFile} value - Content.
 * @param {Processor} processor - retext or remark.
 * @return {VFile} - Result.
 */
function core(value, processor) {
    var file = new VFile(value);

    processor.parse(file);
    processor.run(file);

    sort(file);

    return file;
}

/**
 * alex.
 *
 * Read markdown as input, converts to natural language,
 * then detect violations.
 *
 * @example
 *   alex('We’ve confirmed his identity.').messages;
 *   // [ { [1:17-1:20: `his` may be insensitive, use `their`, `theirs` instead]
 *   //   name: '1:17-1:20',
 *   //   file: '',
 *   //   reason: '`his` may be insensitive, use `their`, `theirs` instead',
 *   //   line: 1,
 *   //   column: 17,
 *   //   fatal: false } ]
 *
 * @param {string|VFile} value - Content.
 * @param {Array.<string>?} allow - Allowed rules.
 * @return {VFile} - Result.
 */
function alex(value, allow) {
    return core(value, remark().use(remark2retext, text).use(control, {
        'name': 'alex',
        'disable': allow,
        'source': [
            'retext-styleguide',
        ]
    }));
}

/**
 * alex, without the markdown.
 *
 * @param {string|VFile} value - Content.
 * @return {VFile} - Result.
 */
function noMarkdown(value) {
    return core(value, text);
}

/*
 * Expose.
 */

alex.text = noMarkdown;
alex.markdown = alex;

module.exports = alex;
