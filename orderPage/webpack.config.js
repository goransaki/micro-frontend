const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4203/",
    uniqueName: "orderPage",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "orderPage",
      library: { type: "var", name: "orderPage" },
      filename: "remoteEntry.js",
      exposes: {
        OrderPageModule:
          "./src/app/modules/order/order-page.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion:'auto', eager: true },
        "@angular/common": { singleton: true, requiredVersion:'auto', eager: true },
        "@angular/router": { singleton: true, requiredVersion:'auto', eager: true },
        "ngx-common-ui-lib": { singleton: true, requiredVersion:'auto', eager: true },
      },
    }),
  ],
};
