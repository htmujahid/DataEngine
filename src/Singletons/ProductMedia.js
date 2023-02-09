"use strict";
exports.__esModule = true;
exports.ProductMediaSingleton = void 0;
var { createRandomProductMedia } = require("../Schemas/ProductMedia");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["ProductMedia"] ?? 1;
var productMedias = [];
for (var i = 0; i < ROWS; i++) {
    productMedias.push(createRandomProductMedia());
}
var ProductMediaSingleton = /** @class */ (function () {
    function ProductMediaSingleton() {
        this.productMedias = productMedias;
    }
    ProductMediaSingleton.getInstance = function () {
        if (!ProductMediaSingleton.instance) {
            ProductMediaSingleton.instance = new ProductMediaSingleton();
        }
        return ProductMediaSingleton.instance;
    };
    return ProductMediaSingleton;
})();
exports.ProductMediaSingleton = ProductMediaSingleton;