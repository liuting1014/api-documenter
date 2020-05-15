'use strict';

const build = require('@microsoft/node-library-build');

build.initialize(require('gulp'));
build.copyStaticAssets.setConfig({
    includeExtensions: [ 'png' ],
});
