import {
  getListById,
  getEventsByDate,
  createList,
  updateList,
  deleteUserList,
  deleteByDate,
} from "../db/CalendarEvents";
import { Response, Request } from "express";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const { userId, date } = req.params;
    const events = await getEventsByDate(date, userId);
    return res.status(200).json(events).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const payload = JSON.parse(req.body.payload);
    const { userId, date, events } = payload;
    if (!userId || !date || !events) return res.sendStatus(400);
    const eventsExists = await getEventsByDate(date, userId);
    if (eventsExists) {
      const updatedList = await updateList(userId, date, events);
      updatedList.events = events;
      await updatedList.save();
      return res.status(200).json(updatedList).end();
    }
    const newList = await createList({
      userId,
      date,
      events,
    });
    return res.status(200).json(newList).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { userId, date, events } = req.body;
    const updatedList = await updateList(userId, date, events);
    updatedList.userId = userId;
    updatedList.events = events;
    await updatedList.save();
    return res.status(200).json(updatedList).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteEvents = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const events = await deleteUserList(userId);
    return res.status(200).json(events).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteEventByDate = async (req: Request, res: Response) => {
  try {
    const { userId, date } = req.params;
    const events = await deleteByDate(userId, date);
    return res.status(200).json(events).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}