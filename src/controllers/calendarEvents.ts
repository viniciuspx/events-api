import {
  getListById,
  createList,
  updateList,
  deleteUserList,
} from "../db/CalendarEvents";
import { Response, Request } from "express";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const events = await getListById(userId);
    return res.status(200).json(events).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const payload = JSON.parse(req.body.payload);
    const { userId, events } = payload;
    if (!userId || !events) return res.sendStatus(400);
    const eventsExists = await getListById(userId);
    if (eventsExists) {
      const updatedList = await updateList(userId, events);
      updatedList.userId = userId;
      updatedList.events = events;
      await updatedList.save();
      return res.status(200).json(updatedList).end();
    }
    const newList = await createList({
      userId,
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
    const { userId, events } = req.body;
    const updatedList = await updateList(userId, events);
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
