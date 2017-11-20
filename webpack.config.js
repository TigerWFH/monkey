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

      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
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
    devServer: {}
  }
}

config = {
  entry: {
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'react-router'],
    index: path.join(__dirname, 'app/index.jsx')
  },
  output: {
    filename: '[name].[chunkhash].js',/*不同的插件使用不同的hash命名方式*/
    chunkFilename: 'modules/[name].[chunkhash].chunk.js',
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
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 8889
    // }),
    // new webpack.HotModuleReplacementPlugin(),

    new webpack.HashedModuleIdsPlugin(),/*解决vendor hash变化问题*/
    new webpack.optimize.CommonsChunkPlugin({/*抽出公共模块*/
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({/*抽出公共模块vendor中的webpack运行环境成为单独模块manifest*/
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.ProvidePlugin({/*不必通过 import/require 使用模块*/
    }),
    new webpack.DefinePlugin({/*允许在编译时(compile time)配置的全局常量*/
      'process.ENV': {
        'ENV': JSON.stringify(env)
      }
    }),
    new ExtractTextWebpackPlugin({/*抽取css文件，并使用css文件自身生成hash*/
      filename: 'index.[contenthash].css'
    }),
    new CleanWebpackPlugin('dist', {/*删除指定目录*/
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({/*根据模板生成对应html文件*/
      title: 'monkey的小屋',
      template: path.join(srcPath, '/index.html'),
      hash: false
    })
  ]
}

config = {...config, ...prdConfig}
module.exports = config;