'use strict'
var path = require('path')
var fs = require('fs')

/**
Walk up the directory tree until the specified path is found.

@module walk-back
*/
module.exports = walkBack

/**
@param {string} - the directory to start in
@param {string} - the path we're looking for
@return {string} absolute url to the found path
@alias module:walk-back
*/
function walkBack (startAt, lookingFor) {
  var dirs = startAt.split(path.sep)
  for (var i = 0; i < dirs.length; i++) {
    var basedir = i < dirs.length - 1
      ? dirs.slice(0, dirs.length - i).join(path.sep)
      : path.sep

    if (fs.existsSync(path.join(basedir, lookingFor))) {
      return path.join(basedir, lookingFor)
    }
  }
  /* if we reached here, nothing was found */
  return null
}
