# To-Do List with Webpack

## Links to Project

[Project with webpack](https://github.com/Davit9494/ToDo_List/tree/main/dist)

[Project without webpack](https://github.com/Davit9494/ToDo_List)

## Webpack initialization

- For first create gitignore file and add there node_modules folder
- Then we have to initialize our project , open console and write : npm init
- Then install webpack and webpack-cli:
  npm i webpack npm i webpack-cli
- Then create webpack config file and name it : webpack.config.js
- For building HTML files we have to install Html plugin , open console and write : npm i html-webpack-plugin
- Open webpack.config.js and add there this default code :

```const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "<Entry Point path>",
  output: {
    path: path.resolve(__dirname, "Project%20Webpack"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "Project/index.html"),
    }),
  ],
};
```

- Open package.json file and new script in script : "build": "webpack"
- Then we have to load css loader module from npm , write this in console : npm i css-loader
  and nmp i mini-css-extract-plugin .
  P.S. I don't know why but without this:mini-css-extract-plugin plugin css file is not loading
- Then we have to make some changes in webpack.config.js file , import css loader and use it in code like this :

```const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./Project/assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "Project Webpack"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "Project/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
```

- And then we have to load clean-webpack-plugin to clean cache of webpack work, write in console
  npm i clean-webpack-plugin
- For minimizing css file we have to install css-minimizer-webpack-plugin ,
  npm i css-minimizer-webpack-plugin
- After that we have to use that module in webpack config file

[See Documentation](https://webpack.js.org/plugins/mini-css-extract-plugin/)

- The final code is

```const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
entry: "./Project/assets/js/index.js",
output: {
  path: path.resolve(__dirname, "Project Webpack"),
},
plugins: [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "Project/index.html"),
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
],
module: {
  rules: [
    { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
  ],
},
optimization: {
  minimizer: [
    new CssMinimizerPlugin(),
    "..."
  ],
},
};
```

- Then then we finally can run build process :)

npm run build
