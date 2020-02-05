const path = require('path');
module.exports = {
  entry: './server/src/components/app.jsx',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'server/src'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
