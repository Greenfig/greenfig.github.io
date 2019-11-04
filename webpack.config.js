const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JavaScriptObfuscator = require('javascript-obfuscator')
const ManifestPlugin = require('webpack-manifest-plugin') 
const csso = require('csso')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const utils = require('./config/utils.js')

let isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
console.log('Building vendor files for \x1b[33m%s\x1Db[0m', process.env.NODE_ENV)
console.log('isDebBuild? \x1b[33m%s\x1Db[0m', isDevBuild, '\n')

const resolvePath = (filePath) => path.join(__dirname, filePath)

const HtmlViews = () => {
  let fileList = fs.readdirSync('./src/views')
  return fileList.map(file => {
    let filename = file.split('.')[0]
    return new HtmlWebpackPlugin({
      contentfilename: filename,
      filename: resolvePath(`${filename}.html`),
      template: resolvePath(`/src/_shared/_layout.ejs`),
      minify: isDevBuild ? {} : {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: isDevBuild ? resolvePath('./node_modules') : false
    })
  })
}

module.exports = () => {
  let WebPack =
  {
    target: 'web',
    mode: isDevBuild ? 'development' : 'production',
    entry: {
      main: './src/main/app.js'
    },
    output: {
      path: path.join(__dirname, './dist'),
      // publicPath: 'dist/',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.ejs'],
      alias: {
        '~': __dirname
      }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          // { test: /\.(ejs)(\?|$)/, use: 'underscore-template-loader' },
          { test: /\.(svg)(\?|$)/, use: 'raw-loader' },
          { test: /\.(png|woff|woff2|eot|ttf)(\?|$)/, use: 'url-loader?limit=100000' },
          { test: /\.(sa|sc|c)ss(\?|$)/, use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'] },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.join(__dirname, './dist/img/[name].[hash:7].[ext]')
            }
          },
          {
            test: require.resolve('jquery'),
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            test: require.resolve('jquery'),
            loader: 'expose-loader',
            options: '$'
          }
        ]
    },
    plugins: [
        // Extract all css into this file
        new MiniCSSExtractPlugin({ filename: 'bundle.[contenthash:8].css' }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          Popper: ['popper.js', 'default']
          /* For modal, you will need to add tether */
        }),
        new ManifestPlugin({
          fileName: 'mainfest.json',
          // Remove ejs to html keys from the manifest
          filter: (file) => file.name && !/(.html)/.test(file.name)
        }),
        new CopyWebpackPlugin([
          {
            from: 'src/assets/js/*',
            to: 'dist/',
            transform: (fileContent, path) => isDevBuild ? fileContent : JavaScriptObfuscator.obfuscate(fileContent.toString(), {
              compact: true,
              controlFlowFlattening: false,
              deadCodeInjection: false,
              debugProtection: false,
              debugProtectionInterval: false,
              disableConsoleOutput: true,
              identifierNamesGenerator: 'hexadecimal',
              log: false,
              renameGlobals: false,
              rotateStringArray: true,
              selfDefending: true,
              stringArray: true,
              stringArrayEncoding: false,
              stringArrayThreshold: 0.75,
              unicodeEscapeSequence: false
            }).getObfuscatedCode()
          },
          {
            from: 'src/assets/css/*',
            to: 'dist/',
            transform: (fileContent, path) => isDevBuild ? fileContent : csso.minify(fileContent.toString()).css
          }
        ])
    ],
    optimization: isDevBuild ? {} : {
      minimizer: [
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
  }

  // Add html plugins
  WebPack.plugins = WebPack.plugins.concat(HtmlViews())
  // Vendors
  WebPack.optimization.splitChunks = {
    chunks: 'all', // Place all modules into one bundle
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `${packageName.replace(/(@)|(.js)/, '')}`;
        }
      }
    }
  }
  return WebPack
}