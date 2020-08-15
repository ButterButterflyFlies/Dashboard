
const path = require("path")
const {
  override,
  addWebpackAlias,
  addExternalBabelPlugins,
} = require("customize-cra")

module.exports = override(
  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    '@Style': path.resolve(__dirname, './src/css/'),
    '@Component': path.resolve(__dirname, './src/component/'),
    '@Page': path.resolve(__dirname, './src/component/pages'),
    '@actionTypes': path.resolve(__dirname, './src/constants/actionTypes'),
    '@Redux': path.resolve(__dirname, './src/redux'),
  }),
  ...addExternalBabelPlugins(
    'jsx-control-statements'
  )
);