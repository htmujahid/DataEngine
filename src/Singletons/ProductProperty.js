"use strict";
exports.__esModule = true;
exports.ProductPropertySingleton = void 0;
var { createRandomProductProperty } = require("../Schemas/ProductProperty");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["ProductProperty"] ?? 1;
var productPropertys = [];
for (var i = 0; i < ROWS; i++) {
    productPropertys.push(createRandomProductProperty());
}
var ProductPropertySingleton = /** @class */ (function () {
    function ProductPropertySingleton() {
        this.productPropertys = productPropertys;
    }
    ProductPropertySingleton.getInstance = function () {
        if (!ProductPropertySingleton.instance) {
            ProductPropertySingleton.instance = new ProductPropertySingleton();
        }
        return ProductPropertySingleton.instance;
    };
    return ProductPropertySingleton;
})();
exports.ProductPropertySingleton = ProductPropertySingleton;