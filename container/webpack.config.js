// const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].[contenthash].js",
  },
  // resolve: {
  //   extensions: ["*", ".js", ".jsx"],
  //   modules: [path.resolve(__dirname, "src"), "node_modules"],
  // },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
