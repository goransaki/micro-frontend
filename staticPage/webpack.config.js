const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4203/",
    uniqueName: "staticPage",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "staticPage",
      library: { type: "var", name: "staticPage" },
      filename: "remoteEntry.js",
      exposes: {
        StaticPageModule:
          "./src/app/modules/static/static-page.module.ts",
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
