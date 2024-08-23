import { strict as a } from 'assert'
import walkBack from 'walk-back'
import currentModulePaths from 'current-module-paths'

const { __dirname } = currentModulePaths(import.meta.url)
const test = new Map()

test.set('basic', function (t) {
  const filename = walkBack(__dirname + '/fixture/subdir', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

test.set('basic2', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'file.txt')
  a.ok(filename.search('walk-back/test/fixture/file.txt') > 0)
})

test.set('not found', function (t) {
  const filename = walkBack(__dirname + '/fixture', 'adskjfhladfn')
  a.equal(filename, null)
})

test.set('relative path', function (t) {
  const filename = walkBack('.', 'test/fixture/subdir/file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

test.set('relative path 2', function (t) {
  const filename = walkBack('./test/fixture/subdir', 'file.txt')
  a.ok(filename && filename.search('walk-back/test/fixture/subdir/file.txt') > 0)
})

test.set('startPath doesn\'t exist', function (t) {
  a.throws(function () {
    walkBack('slfnavnkln', 'file.txt')
  })
})

export { test }
