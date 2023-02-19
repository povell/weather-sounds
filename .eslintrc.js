module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  // "parserOptions": {
  //   requireConfigFile: false,
  //   // babelOptions: {
  //   //   babelrc: false,
  //   //   configFile: false,
  //   //   presets: ["@babel/preset-env"],
  //   // },
  // },
  "rules": {
    "max-len": [1, 100, 2, {ignoreComments: true}]
  },
}
