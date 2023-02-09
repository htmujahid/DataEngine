"use strict";
exports.__esModule = true;
exports.createRandomProduct = void 0;
var { faker } = require("@faker-js/faker");
const { UserSingleton } = require("../Singletons/User");
function createRandomProduct() {
	return {
		_id: faker.database.mongodbObjectId(),
		name: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		price: faker.commerce.price(),
		category: faker.commerce.department(),
		manufacturerId: faker.helpers.arrayElement(
			UserSingleton.getInstance().users._id
		),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomProduct = createRandomProduct;
