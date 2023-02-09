"use strict";
exports.__esModule = true;
exports.createRandomTest = void 0;
var { faker } = require("@faker-js/faker");
function createRandomTest() {
    return {
        _id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        modifiedAt: faker.date.recent()
    };
}
exports.createRandomTest = createRandomTest ;