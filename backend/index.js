import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
import SubscribeRoute from "./Routes/SubscribeRoute.js";

const app = express();

// to serve images for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());

dotenv.config();
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
.then(() =>
      app.listen(process.env.PORT, () =>
            console.log(`Listening at ${process.env.PORT}`)
      )
)
.catch((error) => console.log(error));


// Usage of Routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
app.use("/subscribe", SubscribeRoute);