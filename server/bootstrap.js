require('ignore-styles');

require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ["@babel/preset-env", '@babel/preset-react']
});

// require("@babel/core").transformSync("code", {
//   presets: ["@babel/preset-typescript"],
//   filename: 'script.ts',
// });

require('./index');