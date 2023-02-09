"use strict";
exports.__esModule = true;
exports.PoolSingleton = void 0;
var { createRandomPool } = require("../Schemas/Pool");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Pool"] ?? 1;
var pools = [];
for (var i = 0; i < ROWS; i++) {
    pools.push(createRandomPool());
}
var PoolSingleton = /** @class */ (function () {
    function PoolSingleton() {
        this.pools = pools;
    }
    PoolSingleton.getInstance = function () {
        if (!PoolSingleton.instance) {
            PoolSingleton.instance = new PoolSingleton();
        }
        return PoolSingleton.instance;
    };
    return PoolSingleton;
})();
exports.PoolSingleton = PoolSingleton;