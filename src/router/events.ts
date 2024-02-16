import express from "express";
import { getEvents, create, update, deleteEvents } from "../controllers/calendarEvents";

export default(router: express.Router) => {
    router.get('/events/get/:userId&:date', getEvents);
    router.post('/events/create', create);
    router.patch('/events/update', update);
    router.delete('/events/delete/:userId', deleteEvents)
}