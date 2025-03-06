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
    uniqueName: "dashboard",
    publicPath: "auto"
  },
  optimization: {
    splitChunks: false,
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
        // name: "dashboard",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
         remotes: {
             "classListing": "classListing@http://localhost:4201/remoteEntry.js",
             "tocViewer": "tocViewer@http://localhost:4202/remoteEntry.js",
        },

        /*shared: share({
          "@angular/core": { singleton: true }, 
          "@angular/common": { singleton: true }, 
          "@angular/common/http": { singleton: true }, 
          "@angular/router": { singleton: true },

          ...sharedMappings.getDescriptors()
        })
*/        
    }),
    sharedMappings.getPlugin()
  ],
};
