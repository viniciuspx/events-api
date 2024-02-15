import cookieParser from "cookie-parser";
import compression from "compression";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import router from "./router";
import http from "http";
import cors from "cors";

// Dotenv
import * as dotenv from "dotenv";
dotenv.config();

// Express App
const app = express();
const PORT = 8080;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`API is running on PORT -> ${PORT}`);
});

const MONGO_URL = process.env.DB_HOST;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
