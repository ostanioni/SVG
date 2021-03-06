
const RUNTIME =  [
  "@babel/plugin-transform-runtime",
  {
    "corejs": false,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }
]
const HOT_LOADER = ["react-hot-loader/babel"]
const DECORATOR = ["@babel/plugin-proposal-decorators", { "legacy": true }]
const PROPOSAL = ["@babel/plugin-proposal-class-properties", { "loose" : true }]
const TRANSFORM_LITERALS = [ "@babel/plugin-transform-template-literals", { "loose": true, } ]
const REST_SPREAD = ["@babel/plugin-proposal-object-rest-spread"]
const SYNTAX_JSX = ["@babel/plugin-syntax-jsx"]
// const TS = ["@babel/plugin-transform-typescript", { "isTSX": true, "allExtensions": true }]
// const PRISM = [
//   "prismjs", 
//   {
//       "languages": ["javascript", "css", "markup"],
//       "plugins": ["line-numbers"],
//       "theme": "tomorrow",
//       "css": true
//   }
// ]
const STYLED = [ 
  "babel-plugin-styled-components", 
  { 
    "fileName": true,
    "displayName": true,
    "ssr": false,
    "minify": true,
    "pure": true,
    "transpileTemplateLiterals": true
  } 
]
module.exports = {
  "presets": [ "@babel/preset-env", "@babel/preset-react",  ], // "@babel/preset-typescript",
  "plugins": [ DECORATOR, PROPOSAL, RUNTIME, TRANSFORM_LITERALS, STYLED, HOT_LOADER, REST_SPREAD, SYNTAX_JSX ],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
      "development": {
        "presets": [["@babel/preset-react", { "development": true }]]
      }
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  }
}