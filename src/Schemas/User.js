"use strict";
exports.__esModule = true;
exports.createRandomUser = void 0;
var { faker } = require("@faker-js/faker");
function createRandomUser() {
	return {
		_id: faker.database.mongodbObjectId(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		verified: faker.datatype.boolean(),
		createdAt: faker.date.past(),
		modifiedAt: faker.date.recent()
	};
}
exports.createRandomUser = createRandomUser;
