"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CalendarEventsSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    date: { type: String, required: true },
    events: [
        {
            startTime: { type: String },
            endTime: { type: String },
            desc: { type: String },
        },
    ],
});
//# sourceMappingURL=CalendarEventSchema.js.map