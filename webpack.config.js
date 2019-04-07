const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/assets/dist/js'),
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
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
          filename: path.join(__dirname, '/index.html'),
          template: path.join(__dirname, '/src/index.html'),
          minify: {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true
          },
          nodeModules: process.env.NODE_ENV !== 'production'
            ? path.join(__dirname, '../node_modules')
            : false
        }) 
    ]
}