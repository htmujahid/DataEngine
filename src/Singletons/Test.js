"use strict";
exports.__esModule = true;
exports.TestSingleton = void 0;
var { createRandomTest } = require("../Schemas/Test");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Test"];
var tests = [];
for (var i = 0; i < ROWS; i++) {
    tests.push(createRandomTest());
}
var TestSingleton = /** @class */ (function () {
    function TestSingleton() {
        this.tests = tests;
    }
    TestSingleton.getInstance = function () {
        if (!TestSingleton.instance) {
            TestSingleton.instance = new TestSingleton();
        }
        return TestSingleton.instance;
    };
    return TestSingleton;
})();
exports.TestSingleton = TestSingleton;