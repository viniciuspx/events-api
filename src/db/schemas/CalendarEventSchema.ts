import mongoose from "mongoose";

export const CalendarEventsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  events: [
    {
      date: { type: String },
      startTime: { type: String },
      endTime: { type: String },
      desc: { type: String },
    },
  ],
});
