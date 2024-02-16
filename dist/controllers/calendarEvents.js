"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvents = exports.update = exports.create = exports.getEvents = void 0;
const CalendarEvents_1 = require("../db/CalendarEvents");
const getEvents = async (req, res) => {
    try {
        const { userId, date } = req.params;
        const events = await (0, CalendarEvents_1.getEventsByDate)(date, userId);
        return res.status(200).json(events).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getEvents = getEvents;
const create = async (req, res) => {
    try {
        const payload = JSON.parse(req.body.payload);
        const { userId, date, events } = payload;
        if (!userId || !date || !events)
            return res.sendStatus(400);
        const eventsExists = await (0, CalendarEvents_1.getEventsByDate)(date, userId);
        if (eventsExists) {
            const updatedList = await (0, CalendarEvents_1.updateList)(userId, date, events);
            updatedList.events = events;
            await updatedList.save();
            return res.status(200).json(updatedList).end();
        }
        const newList = await (0, CalendarEvents_1.createList)({
            userId,
            date,
            events,
        });
        return res.status(200).json(newList).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const { userId, date, events } = req.body;
        const updatedList = await (0, CalendarEvents_1.updateList)(userId, date, events);
        updatedList.userId = userId;
        updatedList.events = events;
        await updatedList.save();
        return res.status(200).json(updatedList).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.update = update;
const deleteEvents = async (req, res) => {
    try {
        const { userId } = req.params;
        const events = await (0, CalendarEvents_1.deleteUserList)(userId);
        return res.status(200).json(events).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteEvents = deleteEvents;
//# sourceMappingURL=calendarEvents.js.map