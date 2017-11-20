const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let srcPath = path.join(__dirname, 'app');
let buildPath = path.join(__dirname, 'dist');
let env = process.env.NODE_ENV === 'development' ?
  'development' : 'production';
let prdConfig = {};

if (env === 'production'){
  buildPath = path.join(__dirname, 'static');
  prdConfig = {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.ProvidePlugin({

      }),
      new webpack.DefinePlugin({
        'process.ENV': {
          'ENV': JSON.stringify(env)
        }
      }),
      new ExtractTextWebpackPlugin({
        filename: 'index.[contenthash].css'
      }),
      new CleanWebpackPlugin('static', {
        root: __dirname,
        verbose: true,
        dry: false
      }),
      new HtmlWebpackPlugin({
        title: 'monkey demos',
        template: path.join(srcPath, '/index.html')
      })
    ],
  }
}
config = {
  entry: {
    index: path.join(__dirname, 'app/index.jsx'),
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'react-router']
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'modules/[id].[name].chunk.js',
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        include: [srcPath],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'],
            plugins: ['syntax-dynamic-import',
              'transform-class-properties',
              'transform-runtime',
              'transform-object-rest-spread']
          }
        }]
      },
      {
        test: /\.less$/,
        include: [srcPath],
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: '.',
                modules: true,
                importLoaders: 1,
                minimize: true,
                camelCase: true
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpeg|jpg|gif)/,
        include: [srcPath],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'res/images/[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.json'],
    modules: ['node_modules']
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    watchContentBase: true,
    hot: true,
    noInfo: true,
    proxy: {
      '/v1': "http://localhost:9000"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({

    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.ENV': {
        'ENV': JSON.stringify(env)
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: 'index.[contenthash].css'
    }),
    new CleanWebpackPlugin('dist', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'monkey的小屋',
      template: path.join(srcPath, '/index.html')
    })
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8889
    // })
  ]
}

config = {...config, ...prdConfig}
module.exports = config;