import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, editPost } from "../Controllers/PostController.js";

const Router = express.Router();

Router.post('/', createPost);
Router.get('/:id', getPost);
Router.put('/:id', editPost);
Router.delete("/:id", deletePost);
Router.put("/:id/like", likePost);
Router.get("/:id/timeline", getTimelinePosts);

export default Router;