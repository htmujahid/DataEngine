"use strict";
exports.__esModule = true;
exports.InvoiceSingleton = void 0;
var { createRandomInvoice } = require("../Schemas/Invoice");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Invoice"] ?? 1;
var invoices = [];
for (var i = 0; i < ROWS; i++) {
    invoices.push(createRandomInvoice());
}
var InvoiceSingleton = /** @class */ (function () {
    function InvoiceSingleton() {
        this.invoices = invoices;
    }
    InvoiceSingleton.getInstance = function () {
        if (!InvoiceSingleton.instance) {
            InvoiceSingleton.instance = new InvoiceSingleton();
        }
        return InvoiceSingleton.instance;
    };
    return InvoiceSingleton;
})();
exports.InvoiceSingleton = InvoiceSingleton;