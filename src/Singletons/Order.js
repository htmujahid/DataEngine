"use strict";
exports.__esModule = true;
exports.OrderSingleton = void 0;
var { createRandomOrder } = require("../Schemas/Order");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Order"] ?? 1;
var orders = [];
for (var i = 0; i < ROWS; i++) {
    orders.push(createRandomOrder());
}
var OrderSingleton = /** @class */ (function () {
    function OrderSingleton() {
        this.orders = orders;
    }
    OrderSingleton.getInstance = function () {
        if (!OrderSingleton.instance) {
            OrderSingleton.instance = new OrderSingleton();
        }
        return OrderSingleton.instance;
    };
    return OrderSingleton;
})();
exports.OrderSingleton = OrderSingleton;