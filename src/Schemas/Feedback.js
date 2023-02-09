"use strict";
exports.__esModule = true;
exports.createRandomFeedback = void 0;
var { faker } = require("@faker-js/faker");
var { UserSingleton } = require("../Singletons/User");
var { ProductSingleton } = require("../Singletons/Product");
function createRandomFeedback() {
	return {
		_id: faker.database.mongodbObjectId(),
		description: faker.lorem.paragraph(),
		stars: faker.datatype.number({ min: 1, max: 5 }),
		userId: faker.helpers.arrayElement(UserSingleton.getInstance().users)
			._id,
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomFeedback = createRandomFeedback;
