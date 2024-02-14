import express from "express";
import authetication from "./authentication";
import users from "./users";
import events from "./events";

const router = express.Router();

export default (): express.Router => {
  authetication(router);
  users(router);
  events(router);

  router.get("/", (req: express.Request, res: express.Response) => {
    return res.status(200).json("Events API UP");
  });

  return router;
};
