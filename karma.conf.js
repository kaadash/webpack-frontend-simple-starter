var webpack = require('karma-webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'jasmine' ],
        files: [
            './src/tests/*-test.js' //just load this file
        ],
        plugins: [webpack, 'karma-jasmine'],
        preprocessors: {
            './src/tests/*-test.js': ['webpack'] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};