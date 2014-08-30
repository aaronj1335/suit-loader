var preprocessor = require('suitcss-preprocessor');

module.exports = function(content) {
  this.cacheable = true;

  return preprocessor(content);
};
