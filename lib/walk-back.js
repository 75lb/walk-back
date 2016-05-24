'use strict'
var path = require('path')
var fs = require('fs')

/**
 * Walk up the directory tree until the specified path is found.
 *
 * @module walk-back
 * @example
 * const walkBack = require('walk-back')
 */
module.exports = walkBack

/**
 * Returns an absolute file path (if found) else `null`.
 *
 * @param {string} - the directory to start in
 * @param {string} - the path we're looking for
 * @return {string}
 * @alias module:walk-back
 * @example
 * > startDir = '/Users/lloyd/Documents/75lb/walk-back'
 *
 * > walkBack(startDir, 'package.json')
 * '/Users/lloyd/Documents/75lb/walk-back/package.json'
 *
 * > walkBack(startDir, '75lb')
 * '/Users/lloyd/Documents/75lb'
 *
 * > walkBack(startDir, '.bash_profile')
 * '/Users/lloyd/.bash_profile'
 *
 * > walkBack('.', '.bash_profile')
 * '/Users/lloyd/.bash_profile'
 *
 * > walkBack(startDir, 'non-existent.file')
 * null
 */
function walkBack (startAt, lookingFor) {
  var dirs = path.resolve(startAt).split(path.sep)
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
