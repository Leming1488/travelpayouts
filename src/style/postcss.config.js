module.exports = {
  plugins: {
    'postcss-autoreset': {},
    'postcss-important': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 1%'],
    },
  },
};
