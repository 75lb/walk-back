const a = require('assert').strict
const walkBack = require('walk-back')
const path = require('path')

const test = new Map()

test.set('basic', function (t) {
  const filename = walkBack('./test/fixture/subdir', 'file.txt')
  a.ok(filename.indexOf(path.join('walk-back', 'test', 'fixture', 'subdir', 'file.txt')) > 0)
})

module.exports = { test }
