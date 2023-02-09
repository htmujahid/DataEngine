var filename =
	process.argv[2]?.charAt(0).toLowerCase() + process.argv[2]?.slice(1);

if (!filename) {
	throw Error("Schema filename is required");
}

var Filename = filename.charAt(0).toUpperCase() + filename.slice(1);

var fs = require("fs");

var schemaPattern = `"use strict";
exports.__esModule = true;
exports.createRandom${Filename} = void 0;
var { faker } = require("@faker-js/faker");
function createRandom${Filename}() {
    return {
        _id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        modifiedAt: faker.date.recent()
    };
}
exports.createRandom${Filename} = createRandom${Filename} ;`;

var singletonPattern = `"use strict";
exports.__esModule = true;
exports.${Filename}Singleton = void 0;
var { createRandom${Filename} } = require("../Schemas/${Filename}");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["${Filename}"] ?? 1;
var ${filename}s = [];
for (var i = 0; i < ROWS; i++) {
    ${filename}s.push(createRandom${Filename}());
}
var ${Filename}Singleton = /** @class */ (function () {
    function ${Filename}Singleton() {
        this.${filename}s = ${filename}s;
    }
    ${Filename}Singleton.getInstance = function () {
        if (!${Filename}Singleton.instance) {
            ${Filename}Singleton.instance = new ${Filename}Singleton();
        }
        return ${Filename}Singleton.instance;
    };
    return ${Filename}Singleton;
})();
exports.${Filename}Singleton = ${Filename}Singleton;`;

if (!fs.existsSync("./src/config")) {
	fs.mkdirSync("./src/config");
}

if (!fs.existsSync("./src/Schemas")) {
	fs.mkdirSync("./src/Schemas");
}

if (!fs.existsSync("./src/Singletons")) {
	fs.mkdirSync("./src/Singletons");
}

fs.writeFileSync(`./src/Schemas/${Filename}.js`, schemaPattern);
fs.writeFileSync(`./src/Singletons/${Filename}.js`, singletonPattern);
