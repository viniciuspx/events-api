"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserList = exports.updateList = exports.createList = exports.getListById = exports.ListModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CalendarEventSchema_1 = require("./schemas/CalendarEventSchema");
exports.ListModel = mongoose_1.default.model("Calendar", CalendarEventSchema_1.CalendarEventsSchema);
const getListById = (userId) => exports.ListModel.findOne({ userId: userId });
exports.getListById = getListById;
const createList = (values) => new exports.ListModel(values).save().then((list) => list.toObject());
exports.createList = createList;
const updateList = (userId, values) => exports.ListModel.findOneAndUpdate({ userId: userId }, { list: values });
exports.updateList = updateList;
const deleteUserList = (userId) => exports.ListModel.findOneAndDelete({ userId });
exports.deleteUserList = deleteUserList;
//# sourceMappingURL=CalendarEvents.js.map