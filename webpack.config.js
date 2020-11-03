const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'babel-loader'
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
};
