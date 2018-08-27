const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const md = require('markdown-it')();
const markdownitfence = require('markdown-it-fence');

function fencePlugin(md, options) {
  return markdownitfence(md, 'imark', {
    render: (tokens, idx) => {
      const marker = tokens[idx].info;
      const reg = new RegExp(`:::${marker}((.|\n)*):::`);
      const rendered = md.render('```js\n' + tokens[idx].content + '\n```');
      /**
       * 虽然这里是已经替换成功了，但是 markdown-it code block 的解析是在加载完 dom 后
       * 用 js 来解析，，，估计是用类似 highlightjs 之类的库
       * 十分睿智，所以就只能在 view 层做处理了
       * 所以，，，之前用 markdown-it-container 不行，应该是同一个原因
       */
      // console.log(rendered.replace(reg, `<div class="await-point">$1</div>`));
      return rendered;
    },
  });
}

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './example/index.js',
    libs: ['vue'],
  },
  output: {
    path: path.resolve(__dirname, '../example-dist'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader?',
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: [/_cache/],
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          html: true,
          use: [
            // [fencePlugin],
            [require('markdown-it-container'), 'tip'],
            [require('markdown-it-container'), 'warning'],
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      inject: true,
      template: path.resolve(__dirname, '../example/index.html'),
      chunks: ['libs', 'main'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      example: path.resolve(__dirname, '../example'),
      root: path.resolve(__dirname, '../'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '../example-dist'),
    historyApiFallback: true,
    compress: true,
    port: 8080,
    clientLogLevel: 'none',
  },
};
