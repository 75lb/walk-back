import { strict as a } from 'assert'
import walkBack from 'walk-back'
import path from 'node:path'

const test = new Map()

test.set('basic', function (t) {
  const filename = walkBack('./test/fixture/subdir', 'file.txt')
  a.ok(filename.indexOf(path.join('walk-back', 'test', 'fixture', 'subdir', 'file.txt')) > 0)
})

test.set('basic2', function (t) {
  const filename = walkBack('./test/fixture', 'file.txt')
  a.ok(filename.indexOf(path.join('walk-back', 'test', 'fixture', 'file.txt')) > 0)
})

test.set('not found', function (t) {
  const filename = walkBack('./test/fixture', 'adskjfhladfn')
  a.equal(filename, null)
})

test.set('relative path', function (t) {
  const filename = walkBack('.', path.join('test', 'fixture', 'subdir', 'file.txt'))
  a.ok(filename && filename.indexOf(path.join('walk-back', 'test', 'fixture', 'subdir', 'file.txt')) > 0)
})

test.set('relative path 2', function (t) {
  const filename = walkBack(path.join('test', 'fixture', 'subdir'), 'file.txt')
  a.ok(filename && filename.indexOf(path.join('walk-back', 'test', 'fixture', 'subdir', 'file.txt')) > 0)
})

test.set("startPath doesn't exist", function (t) {
  a.throws(function () {
    walkBack('slfnavnkln', 'file.txt')
  })
})

export { test }
