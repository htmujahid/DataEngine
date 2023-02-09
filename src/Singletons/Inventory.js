"use strict";
exports.__esModule = true;
exports.InventorySingleton = void 0;
var { createRandomInventory } = require("../Schemas/Inventory");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Inventory"] ?? 1;
var inventorys = [];
for (var i = 0; i < ROWS; i++) {
    inventorys.push(createRandomInventory());
}
var InventorySingleton = /** @class */ (function () {
    function InventorySingleton() {
        this.inventorys = inventorys;
    }
    InventorySingleton.getInstance = function () {
        if (!InventorySingleton.instance) {
            InventorySingleton.instance = new InventorySingleton();
        }
        return InventorySingleton.instance;
    };
    return InventorySingleton;
})();
exports.InventorySingleton = InventorySingleton;