const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "table",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "table",
      library: { type: "var", name: "table" },
      filename: "remoteEntry.js",
      exposes: {
        TablePageModule:
          "./src/app/modules/table/table-page.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion:'auto', eager: true },
        "@angular/common": { singleton: true, requiredVersion:'auto', eager: true },
        "@angular/router": { singleton: true, requiredVersion:'auto', eager: true },
        "@angular/material": { singleton: true, requiredVersion:'auto', eager: true },
      },
    }),
  ],
};
