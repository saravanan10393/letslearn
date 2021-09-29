import OptimizePlugin from "optimize-plugin";

const config = {
  mode: "production",
  entry: "./use.hotkey.js",
  output: {
    // filename: "hotkey.js",
    library: {
      type: "module"
    },
    module: true,
  },
  experiments: {
    outputModule: true
  },
  externals: {
    react: "react"
  },
  // externalsType: "module",
  target: ["web", "es2020"],
  node: false,
  plugins: [
    new OptimizePlugin({
      minify: false,
      downlevel: false
    })
  ]
}

export default config;
