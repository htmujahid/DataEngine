"use strict";
exports.__esModule = true;
exports.createRandomPool = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
function createRandomPool() {
	return {
		_id: faker.database.mongodbObjectId(),
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		qty: faker.datatype.number({ min: 1, max: 100 }),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomPool = createRandomPool;
