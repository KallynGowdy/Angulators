const webpack = require('webpack');

module.exports = {
    entry: {
        'angulators.umd': './src/index.ts',
        'angulators.umd.min': './src/index.ts'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        library: 'angulators',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: true
        })
    ],
    externals: {
        '@angular/core': {
            root: ['ng', 'core'],
            commonjs: ['@angular/core'],
            amd: '@angular/core'
        },
        '@angular/common': {
            root: ['ng', 'common'],
            commonjs: ['@angular/common'],
            amd: '@angular/common'
        },
        '@angular/forms': {
            root: ['ng', 'forms'],
            commonjs: ['@angular/forms'],
            amd: '@angular/forms'
        }
    }
};
