const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // input file
  output: { // where bundle is created -> transpiled code that is generated after build
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: { 
    rules: [ // informing which tool it will be used for each type of file -> 'loaders'
      {
        test: /\.js$/, // js file that terminates with '.js'
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, // includes CSS files inside html (<style>cssfile</style>)
          {loader: 'css-loader'} // allows import others CSS files or images inside CSS files
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}