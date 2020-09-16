const path = require('path')

module.exports = function() {
  return {
    registerRuntimePlugin() {
      return path.resolve(__dirname, './runtime.js');
    }
  }
}