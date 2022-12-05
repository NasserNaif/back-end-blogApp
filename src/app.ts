import express from "express";
import "dotenv/config";
import blogRouter from "./routes/blogRouter";
import userRouter from "./routes/userRouter";
import cors from "cors";

const app = express();

//middelware
app.use(express.json());
app.use(cors());

app.use(`/api/v1/blog`, blogRouter);
app.use(`/api/v1/user`, userRouter);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log("server run in port : " + PORT);
});
