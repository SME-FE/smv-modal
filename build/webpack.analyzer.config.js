const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const merge = require('webpack-merge');
const prod = require('./webpack.prod.config');

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
