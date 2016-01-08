var babelJest = require('babel-jest');

module.exports = {
  process: function (src, filename) {
    var cleanSrc = (filename.match(/\.?css$/)) ? '' : src;
    return babelJest.process(cleanSrc, filename);
  }
};
