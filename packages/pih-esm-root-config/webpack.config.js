const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/pih-esm-root-config.ts"),
  output: {
    filename: "pih-esm-root-config.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system",
  },
  externals: [
    "single-spa",
    "i18next",
    "react-i18next",
    "@openmrs/esm-module-config",
  ],
  devtool: "sourcemap",
  mode: "development",
  module: {
    rules: [
      {
        // https://github.com/systemjs/systemjs#compatibility-with-webpack
        parser: {
          system: false,
        },
      },
      {
        test: /\.(m?js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
  },
  plugins: [new CleanWebpackPlugin()],
};
