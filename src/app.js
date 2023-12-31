import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//middleware and configuration
app.use(express.json({ limit: "16kb" }));
//jab diffrent url se data aata heto url me changes hota he to urlencoded() config karna hota he to apun use karte he app.use
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//to store file images like assest in public folder
app.use(express.static("public"));
app.use(cookieParser());

//routes import 
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app };
