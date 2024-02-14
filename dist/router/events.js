"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calendarEvents_1 = require("../controllers/calendarEvents");
exports.default = (router) => {
    router.get('/events/get/:userId', calendarEvents_1.getEvents);
    router.post('/events/create', calendarEvents_1.create);
    router.patch('/events/update', calendarEvents_1.update);
    router.delete('/events/delete/:userId', calendarEvents_1.deleteEvents);
};
//# sourceMappingURL=events.js.map