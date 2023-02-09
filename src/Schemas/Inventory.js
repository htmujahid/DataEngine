"use strict";
exports.__esModule = true;
exports.createRandomInventory = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
function createRandomInventory() {
	return {
		_id: faker.database.mongodbObjectId(),
		quantity: faker.datatype.number({ min: 1, max: 100 }),
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomInventory = createRandomInventory;
