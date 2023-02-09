"use strict";
exports.__esModule = true;
exports.createRandomProductMedia = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
function createRandomProductMedia() {
	return {
		_id: faker.database.mongodbObjectId(),
		productId: faker.helpers.arrayElement(
			ProductSingleton.getInstance().products
		)._id,
		mediaURL: faker.helpers.arrayElements([
			faker.image.abstract(640, 480, true),
			faker.image.abstract(640, 480, true),
			faker.image.abstract(640, 480, true),
			faker.image.abstract(640, 480, true),
			faker.image.abstract(640, 480, true)
		]),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomProductMedia = createRandomProductMedia;
