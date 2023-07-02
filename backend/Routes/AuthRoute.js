import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const Router = express.Router();


Router.post("/login", loginUser);
Router.post("/register", registerUser);

export default Router;