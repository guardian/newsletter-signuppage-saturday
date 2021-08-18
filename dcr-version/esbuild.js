#!/usr/bin/env node

require("esbuild").buildSync({
  entryPoints: ["app.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: ".build/app.js",
});
