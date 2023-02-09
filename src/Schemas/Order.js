"use strict";
exports.__esModule = true;
exports.createRandomOrder = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
var { UserSingleton } = require("../Singletons/User");
function createRandomOrder() {
	return {
		_id: faker.database.mongodbObjectId(),
		userId: faker.helpers.arrayElement(UserSingleton.getInstance().users)
			._id,
		products: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		qty: faker.datatype.number({ min: 1, max: 10 }),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomOrder = createRandomOrder;
