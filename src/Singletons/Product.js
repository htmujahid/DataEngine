"use strict";
exports.__esModule = true;
exports.ProductSingleton = void 0;
var { createRandomProduct } = require("../Schemas/Product");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Product"] ?? 1;
var products = [];
for (var i = 0; i < ROWS; i++) {
    products.push(createRandomProduct());
}
var ProductSingleton = /** @class */ (function () {
    function ProductSingleton() {
        this.products = products;
    }
    ProductSingleton.getInstance = function () {
        if (!ProductSingleton.instance) {
            ProductSingleton.instance = new ProductSingleton();
        }
        return ProductSingleton.instance;
    };
    return ProductSingleton;
})();
exports.ProductSingleton = ProductSingleton;