import express, { Request, Response } from "express";

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/log", (req: Request, res: Response) => {
  res.status(200).json({ message: "log" });
});
app.use("/hello", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello World of warcraft" });
});

export default app;
