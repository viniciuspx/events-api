import mongoose, { Mongoose } from "mongoose";
import { CalendarEventsSchema } from "./schemas/CalendarEventSchema";

export const ListModel = mongoose.model("Calendar", CalendarEventsSchema);

export const getListById = (userId: string) =>
  ListModel.findOne({ userId: userId });
export const getEventsByDate = (date: string, userId: string) =>
  ListModel.findOne({ userId: userId, date: date });
export const createList = (values: Record<string, any>) =>
  new ListModel(values).save().then((list) => list.toObject());
export const updateList = (
  userId: string,
  date: string,
  values: Record<string, any>
) =>
  ListModel.findOneAndUpdate({ userId: userId, date: date }, { list: values });
export const deleteUserList = (userId: string) =>
  ListModel.deleteMany({ userId });
export const deleteByDate = (userId: string, date: string) =>
  ListModel.findOneAndDelete({ userId: userId, date: date });
