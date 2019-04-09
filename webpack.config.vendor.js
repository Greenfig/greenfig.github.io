const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = () => {
  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')

  console.log('Building vendor files for \x1b[33m%s\x1Db[0m', process.env.NODE_ENV)
  console.log('isDebBuild? \x1b[33m%s\x1Db[0m', isDevBuild, '\n')
  return [{
    mode: isDevBuild ? 'development' : 'production',
    stats: { modules: false },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css(\?|$)/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        { test: /\.scss(\?|$)/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
      ]
    },
    entry: {
      vendor: [
        'bootstrap',
        'bootstrap/dist/css/bootstrap.css',
        'jquery']
    },
    output: {
      path: path.join(__dirname, 'dist', 'vendor'),
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    plugins: [
      // extract css into its own file
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[contenthash:8].css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
        /* For modal, you will need to add tether */
      }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
      new webpack.DllPlugin({
        path: path.join(__dirname, 'dist', 'vendor', '[name]-manifest.json'),
        name: '[name]_[hash]'
      })
    ],
    optimization: isDevBuild ? {} : { minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      }),
      // Compress extracted CSS.
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]}
  }]
}
