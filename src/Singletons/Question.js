"use strict";
exports.__esModule = true;
exports.QuestionSingleton = void 0;
var { createRandomQuestion } = require("../Schemas/Question");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Question"] ?? 1;
var questions = [];
for (var i = 0; i < ROWS; i++) {
    questions.push(createRandomQuestion());
}
var QuestionSingleton = /** @class */ (function () {
    function QuestionSingleton() {
        this.questions = questions;
    }
    QuestionSingleton.getInstance = function () {
        if (!QuestionSingleton.instance) {
            QuestionSingleton.instance = new QuestionSingleton();
        }
        return QuestionSingleton.instance;
    };
    return QuestionSingleton;
})();
exports.QuestionSingleton = QuestionSingleton;