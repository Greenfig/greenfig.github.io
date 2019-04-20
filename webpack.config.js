const HtmlWebpackPlugin = require('html-webpack-plugin')
const DllReferencePlugin = require('webpack').DllReferencePlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const fs = require('fs')

let isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
const resolve = (filePath) => path.join(__dirname, filePath)

const HtmlViews = () => {  
  let hwp = []
  let fileList = fs.readdirSync('./src/views')
  fileList.forEach(file => {
    let filename = file.split('.')[0]
    hwp.push(new HtmlWebpackPlugin({
      contentfilename: filename,
      filename: path.join(__dirname, `${filename}.html`),
      template: path.join(__dirname, `/src/_shared/_layout.ejs`),
      minify: isDevBuild ? {} : {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.join(__dirname, '../node_modules')
        : false
    }))
  })
  return hwp
}

module.exports = () => {
  let webpack =
  {
    mode: isDevBuild ? 'development' : 'production',
    entry: {
      main: './src/assets/js/app.js'
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
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
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        // Extract all css into this file
        new ExtractTextPlugin('bundle.css'),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor/vendor-manifest.json')
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
  }
  // Add html plugins
  webpack.plugins = webpack.plugins.concat(HtmlViews())
  return webpack
}