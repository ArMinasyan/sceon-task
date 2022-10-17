import express from "express";
import bodyParser from "body-parser";
import { userRouter } from "./controllers";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log(`Start on port ${3000}`);
});
