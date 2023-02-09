"use strict";
exports.__esModule = true;
exports.UserSingleton = void 0;
var { createRandomUser } = require("../Schemas/User");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["User"] ?? 1;
var users = [];
for (var i = 0; i < ROWS; i++) {
    users.push(createRandomUser());
}
var UserSingleton = /** @class */ (function () {
    function UserSingleton() {
        this.users = users;
    }
    UserSingleton.getInstance = function () {
        if (!UserSingleton.instance) {
            UserSingleton.instance = new UserSingleton();
        }
        return UserSingleton.instance;
    };
    return UserSingleton;
})();
exports.UserSingleton = UserSingleton;