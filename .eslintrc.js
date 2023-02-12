module.exports = {
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-env"],
    },
  },
  "rules": {
    "max-len": [1, 100, 2, {ignoreComments: true}]
  },
}
