const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {

    mode: 'development',
    context: path.resolve(__dirname),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-modules-commonjs'] // 여기 추가
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        fallback: {
            "http": require.resolve("http-browserify"),
            "util": require.resolve("util/"),
            "path": require.resolve("path-browserify"),
        },
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    target: 'node',
    externalsPresets: {
        node: true,
    },
    externals: [nodeExternals()],
};