import express from "express";
import {
  getEvents,
  create,
  update,
  deleteEvents,
  deleteEventByDate,
} from "../controllers/calendarEvents";

export default (router: express.Router) => {
  router.get("/events/get/:userId&:date", getEvents);
  router.post("/events/create", create);
  router.patch("/events/update", update);
  router.delete("/events/delete/:userId", deleteEvents);
  router.delete("/events/delete/date/:userId&:date", deleteEventByDate);
};
