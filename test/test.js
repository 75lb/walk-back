var test = require("tape");
var walkBack = require("../");
var fs = require("fs");

test("basic", function(t){
    t.plan(1);

    var filename = walkBack(__dirname + "/fixture/subdir", "file.txt");
    t.ok(filename.search("walk-back/test/fixture/subdir/file.txt") > 0);
});

test("basic2", function(t){
    t.plan(1);

    var filename = walkBack(__dirname + "/fixture", "file.txt");
    t.ok(filename.search("walk-back/test/fixture/file.txt") > 0);
});

test("not found", function(t){
    t.plan(1);

    var filename = walkBack(__dirname + "/fixture", "adskjfhladfn");
    t.strictEqual(filename, null);
});
