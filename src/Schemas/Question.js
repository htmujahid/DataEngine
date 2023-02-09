"use strict";
exports.__esModule = true;
exports.createRandomQuestion = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
var { UserSingleton } = require("../Singletons/User");
function createRandomQuestion() {
	return {
		_id: faker.database.mongodbObjectId(),
		question: faker.datatype.string(),
		answer: faker.datatype.string(),
		userId: faker.helpers.arrayElement(UserSingleton.getInstance().users)
			._id,
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomQuestion = createRandomQuestion;
