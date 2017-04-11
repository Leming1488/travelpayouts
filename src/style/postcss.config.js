module.exports = {
  plugins: {
    'postcss-initial': {
      reset: 'all',
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 1%'],
    },
  },
};
