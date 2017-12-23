const path = require('path'),
    webpack = require('webpack');


module.exports = {
        entry: {
            'util-toolkit': './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "[name].js",
            libraryTarget: 'commonjs'
        },
        externals: {
            lodash: {
              commonjs: 'lodash',
              amd: 'lodash'
            },
            react: {
                commonjs: 'react',
                amd: 'react'
            },
            redux: {
                commonjs: 'redux',
                amd: 'redux'
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
};
