"use strict";
exports.__esModule = true;
exports.createRandomInvoice = void 0;
var { faker } = require("@faker-js/faker");
var { OrderSingleton } = require("../Singletons/Order");
function createRandomInvoice() {
	return {
		_id: faker.database.mongodbObjectId(),
		orderId: faker.helpers.arrayElement(OrderSingleton.getInstance().orders)
			._id,
		amount: faker.datatype.number({ min: 100, max: 5000 }),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomInvoice = createRandomInvoice;
