const path = require("path");

module.exports = {
  // entry: "./assets/index.js", // path to our input file
  // output: {
  //   filename: "index-bundle.js", // output bundle file name
  //   path: path.resolve(__dirname, "./static"), // path to our Django static directory
  // },
  entry: {
    index: "./assets/index.js",
    not_auth: "./assets/landing.js",
  },
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "[name].js",
  },
  module: {
    rules: [
      // this is for react js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      //   this is for vuejs
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
