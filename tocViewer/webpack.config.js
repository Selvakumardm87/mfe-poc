const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const { library, experiments } = require("webpack");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "tocViewer",
    publicPath: "auto"
  },
  optimization: {
    //splitChunks: false,
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  //experiments:{
    //outputModule: true
  //},
  plugins: [
    new ModuleFederationPlugin({
      //library :{ type: 'module'},

        // For remotes (please adjust)
         name: "tocViewer",
         filename: "remoteEntry.js",
         exposes: {
             './Module': './/src/app/toc/toc.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        /*shared: share({
          "@angular/core": { singleton: false }, 
          "@angular/common": { singleton: false }, 
          "@angular/common/http": { singleton: false }, 
          "@angular/router": { singleton: false },

          ...sharedMappings.getDescriptors()
        })
        */
    }),
    sharedMappings.getPlugin()
  ],
};
