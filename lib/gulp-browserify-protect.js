/*
 * gulp-transform
 * https://github.com/mathisonian/gulp-transform
 *
 * Copyright (c) 2014 Matthew Conlen
 * Licensed under the MIT license.
 */

'use strict';

var through = require('through2');
var _ = require('lodash');

var protectedVars = ['define', 'require'];

module.exports = function() {

    var transform = function(file, env, cb) {


        var initialCode = ';';
        var postCode = ';';
        _.each(protectedVars, function(v) {
            initialCode += 'window._' + v + ' = window.' + v + ';';
            initialCode += 'window.' + v + ' = undefined;';

            postCode += 'window.' + v + ' = window._' + v + ';';
        });


        file.contents = new Buffer(initialCode + file.contents + postCode);
        cb(null, file);
    };

    return through.obj(transform);
};
