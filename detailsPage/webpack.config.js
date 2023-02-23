const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "details",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "details",
      library: {type: "var", name: "details"},
      filename: "remoteEntry.js",
      exposes: {
        DetailsPageModule:
          "./src/app/modules/details/details-page.module.ts",
      },
      shared: {
        "@angular/core": {singleton: true, requiredVersion: 'auto', eager: true},
        "@angular/common": {singleton: true, requiredVersion: 'auto', eager: true},
        "@angular/router": {singleton: true, requiredVersion: 'auto', eager: true},
        "@angular/material": {singleton: true, requiredVersion: 'auto', eager: true},
      },
    }),
  ],
};
