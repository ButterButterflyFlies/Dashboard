const path = require("path");

module.exports = function override(config, env) {
  // add an alias for "ag-grid-react" imports
  config.resolve.alias = {
    '@Style': path.resolve(__dirname, './src/css/'),
    '@Component': path.resolve(__dirname, './src/component/'),
    '@Page': path.resolve(__dirname, './src/component/pages'),
    '@actionTypes': path.resolve(__dirname, './src/constants/actionTypes'),
  }
  return config
};