const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const OUTPUT_DIR = path.resolve(__dirname, 'public/js')
const INPUT_DIR = path.resolve(__dirname, "src/ts");
const WASM_EXEC_JS_FILENAME = "wasm_exec.js";

module.exports = {
    entry: path.join(INPUT_DIR, "index.ts"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.join(INPUT_DIR, "wasm-wrapper", WASM_EXEC_JS_FILENAME), to: path.join(OUTPUT_DIR, WASM_EXEC_JS_FILENAME) },
            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: OUTPUT_DIR,
    },
};
