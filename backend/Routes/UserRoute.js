import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../Controllers/UserController.js";

const Router = express.Router();

Router.get('/:id', getUser);
Router.put('/:id', updateUser);
Router.delete('/:id', deleteUser);
Router.put('/:id/follow', followUser);
Router.put('/:id/unfollow', unfollowUser);

export default Router;