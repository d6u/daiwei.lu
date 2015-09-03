'use strict';

var swig = require('swig');
var YAML = require('js-yaml');
var fs = require('fs');
var path = require('path');
var loaderUtils = require('loader-utils');

var fsOpt = { encoding: 'utf8' };

module.exports = function (source) {
  var self = this;
  var query = loaderUtils.parseQuery(this.query);

  if (query.context) {
    var callback = this.async();
    fs.readFile(path.resolve(query.context), fsOpt, function (err, str) {
      var html = swig.render(source, {
        filename: self.resourcePath,
        locals: YAML.safeLoad(str),
      });

      callback(err, html);
    });
    return;
  }

  return swig.render(source, {
    filename: this.resourcePath,
  });
};
