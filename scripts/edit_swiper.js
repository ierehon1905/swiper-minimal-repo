const fs = require("fs");
const path = require("path");

const package = require("swiper/package.json");
package.sideEffects = ["*.css", "*.scss", "*.sass"];

fs.writeFileSync(
  path.resolve("node_modules", "swiper", "package.json"),
  JSON.stringify(package, null, 2)
);
