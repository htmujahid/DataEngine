"use strict";
exports.__esModule = true;
exports.createRandomProductProperty = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
function createRandomProductProperty() {
	return {
		_id: faker.database.mongodbObjectId(),
		size: faker.datatype.number(),
		color: faker.datatype.string(),
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomProductProperty = createRandomProductProperty;
