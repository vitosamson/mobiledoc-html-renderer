/* jshint node:true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var testBuilder = require('broccoli-test-builder');

var options = {
  packageName: 'mobiledoc-html-renderer'
};

module.exports = mergeTrees([
  testBuilder.build()
]);
