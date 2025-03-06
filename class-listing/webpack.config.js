const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "classListing",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // For remotes (please adjust)
        name: "classListing",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './/src/app/class-listing/class-listing.module.ts',
       },               
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },
        remotes: {
          "tocViewer": "tocViewer@http://localhost:4202/remoteEntry.js",
     },

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
