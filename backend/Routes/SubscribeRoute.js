import express from "express";
import { subscribeUser } from "../Controllers/SubscribeController.js";

const Router = express.Router();

Router.put('/:id', subscribeUser);

export default Router;