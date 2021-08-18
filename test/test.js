const Tom = require('test-runner').Tom
const walkBack = require('walk-back')
const a = require('assert').strict

const tom = module.exports = new Tom()

tom.test('basic', function (t) {
  const filename = walkBack(__dirname + '/fixture/subdir', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

tom.test('basic2', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/file.txt') > 0)
})

tom.test('not found', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'adskjfhladfn')
  a.equal(filename, null)
})

tom.test('relative path', function (t) {
  const filename = walkBack('.', 'test/fixture/subdir/file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

tom.test('relative path 2', function (t) {
  const filename = walkBack('./test/fixture/subdir', 'file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

tom.test('startPath doesn\'t exist', function (t) {
  a.throws(function () {
    walkBack('slfnavnkln', 'file.txt')
  })
})
