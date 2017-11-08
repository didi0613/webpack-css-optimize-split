"use strict";

const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default;

// class OptimizePlugin {
//   constructor() {}

//   apply(compiler) {
//     compiler.plugin("emit", function(compilation, compileCallback) {
//       console.log("optimize plugin on emit");
//       setTimeout(() => {
//         compileCallback();
//       }, 50);
//     });
//   }
// }

// class SplitPlugin {
//   constructor() {}

//   apply(compiler) {
//     compiler.plugin("emit", (compilation, done) => {
//       console.log("split plugin on emit");
//       setTimeout(() => {
//         done();
//       }, 50);
//     });
//   }
// }

module.exports = {
  output: {
    path: Path.resolve("dist"),
    filename: "[name].bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  entry: "./app.js",
  plugins: [
    new ExtractTextPlugin("[name].styles.[hash].css"),
    new OptimizeCSSPlugin(),
    new CSSSplitWebpackPlugin({ size: 2000, preserve: true })
  ]
};
