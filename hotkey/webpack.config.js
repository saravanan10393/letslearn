import OptimizePlugin from "optimize-plugin";

const config = {
  mode: "production",
  entry: "./use.hotkey.js",
  output: {
    filename: "hotkey.js",
    // hinting webpack that, this is a library with 
    // native ESM module
    library: {
      type: "module"
    },
    // Tell webpack emit ESM code
    module: true,
  },
  experiments: {
    outputModule: true
  },
  // Ignore all peer-dependencies from bundling
  externals: {
    react: "react"
  },
  target: ["web", "es2020"],
  node: false,
  // optimization: {
  //   minimize: false
  // }
}

export default config;
