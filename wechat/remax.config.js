const plugin = require('./plugin')

console.log('config!')
module.exports = {
  plugins: [
    plugin(),
  ],
};