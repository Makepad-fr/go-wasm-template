const path = require('path');

module.exports = {
  entry: './src/ts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.wasm'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web/js'),
  },
};
