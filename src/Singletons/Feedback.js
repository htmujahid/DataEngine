"use strict";
exports.__esModule = true;
exports.FeedbackSingleton = void 0;
var { createRandomFeedback } = require("../Schemas/Feedback");
var { data_rows } = require("../config/data_rows");
var ROWS = data_rows["Feedback"] ?? 1;
var feedbacks = [];
for (var i = 0; i < ROWS; i++) {
    feedbacks.push(createRandomFeedback());
}
var FeedbackSingleton = /** @class */ (function () {
    function FeedbackSingleton() {
        this.feedbacks = feedbacks;
    }
    FeedbackSingleton.getInstance = function () {
        if (!FeedbackSingleton.instance) {
            FeedbackSingleton.instance = new FeedbackSingleton();
        }
        return FeedbackSingleton.instance;
    };
    return FeedbackSingleton;
})();
exports.FeedbackSingleton = FeedbackSingleton;