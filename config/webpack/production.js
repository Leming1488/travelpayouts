import webpackMerge from 'webpack-merge';
import CompressionPlugin from 'compression-webpack-plugin';
import getBaseConfig from './base';

export default () => webpackMerge(getBaseConfig(), {
  plugins: [
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8
      })
  ],
});
