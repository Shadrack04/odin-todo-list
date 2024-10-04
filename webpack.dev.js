const common = require("./common.config");
const {merge} = require("webpack-merge");

module,exports = merge(common, {
  mode: "development",
  devtools: "eval-source-map",
  filename: {
    watchFiles: ["./src/template.html"],
  }
})