# Data Engine

This repository contains a highly efficient data generation framework built on top of Faker.js, designed for database seeding in testing and development environments. The framework makes use of the Singleton pattern to ensure that only one instance of the generator is used throughout the application, improving performance and ensuring consistent data generation. With a variety of customization options, users can generate realistic and meaningful data in a variety of formats and specifications to populate their databases. Whether you're working on a small project or a large enterprise application, this framework is the perfect solution for streamlining your data seeding needs.

## Usage

1. `npm install`
2. `npm run make {SchemaName}`
3. `npm start`

## Documentation

Simple schema

```
"use strict";
exports.__esModule = true;
exports.TestSingleton = void 0;
var { faker } = require("@faker-js/faker");
function createRandomTest() {
    return {
        _id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        modifiedAt: faker.date.recent()
    };
}
exports.createRandomTest = createRandomTest;
```

For more schema related documentation visit [Faker](https://fakerjs.dev/api/)

Adjust Forign Key Value

User Schema

```
"use strict";
exports.__esModule = true;
exports.createRandomUser = void 0;
var { faker } = require("@faker-js/faker");
function createRandomUser() {
    return {
        _id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        createdAt: faker.date.past(),
        modifiedAt: faker.date.recent()
    };
}
exports.createRandomUser = createRandomUser;
```

Product Schema

```
"use strict";
exports.__esModule = true;
exports.createRandomProduct = void 0;
var { faker } = require("@faker-js/faker");
var { UserSingleton } = require("../Singletons/User");
function createRandomProduct() {
    return {
        _id: faker.datatype.uuid(),
        userId: faker.helpers.arrayElement(UserSingleton.getInstance().users)._id,
        product: faker.name.fullName(),
        createdAt: faker.date.past(),
        modifiedAt: faker.date.recent()
    };
}
exports.createRandomProduct = createRandomProduct;
```

ProductMedia Schema

```
"use strict";
exports.__esModule = true;
exports.createRandomProductMedia = void 0;
var { faker } = require("@faker-js/faker");
var { ProductSingleton } = require("../Singletons/Product");
var counter = 0
function createRandomProductMedia() {
    return {
        _id: faker.datatype.uuid(),
        productId: UserSingleton.getInstance().users[counter]._id,
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
```
