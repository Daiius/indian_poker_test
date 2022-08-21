const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader?modules",
            options: { url: false }
          }
        ]
      },
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    libraryTarget: "umd"
  },
//  optimization: {
//    minimize: true
//  }
};

