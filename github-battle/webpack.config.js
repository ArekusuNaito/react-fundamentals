var HtmlWebpackPlugin = require('html-webpack-plugin') //is going to take our html file and inject it to our bundled
var HtmlWebPackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports =
{
  entry: //Code that will be transformed
  [
    "./app/index.js"
  ],
  output: //Converted code goes here :)
  {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module:
  {
    loaders:
    [
      { //Transform our JSX to regular JS
        test: /\.js$/, //All our js files
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [HtmlWebPackPluginConfig]
};
