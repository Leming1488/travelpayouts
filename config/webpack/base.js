import webpack from 'webpack';
import path from 'path';

export default () => ({
  entry: './src/index.js',
  output: {
    library: 'WebpackPackage',
    path: path.join(__dirname, '../..', 'assets'),
    filename: 'webpack-package.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
            {
              loader: 'sass-loader',
            }
         ]
       }
    ],
  },
  // plugins: [
  //   new webpack.EnvironmentPlugin(['NODE_ENV']),
  // ],
});
