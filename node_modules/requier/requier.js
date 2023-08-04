'use strict';

module.exports = function(mod) {
  var path = require('path'),
      rootModule = require('root-module')(),
      packageJson = require(rootModule.packageFile);

  if(
    packageJson.hasOwnProperty('directories')
    && packageJson['directories'].hasOwnProperty('requier')
  ) {
    return require(path.resolve(rootModule.folder, packageJson['directories']['requier']) + path.sep + mod);
  } else {
    throw new Error('Could not find property \'directories.requier\' inside ' + rootModule.packageFile);
  }
};
