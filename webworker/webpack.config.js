const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    }
  },
  // externals: {
  //   react: "https://cdn.skypack.dev/react",
  //   "react-dom": "https://cdn.skypack.dev/react-dom"
  // },
  // externalsType: "module",
  // experiments: {
  //   outputModule: true
  // },
  // externalsType: "module",
  output: {
    filename: "[name].js",
    publicPath: "auto",
    // module: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  target: ["web","es2020"],
  node: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.ejs",
      inject: false
    }),
  ],
  optimization: {
    minimize: false
  },
};
