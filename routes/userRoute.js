import express from "express";
import { create, deleteUser, fetch, signin, signup, update } from "../controller/userController.js";

const route = express.Router();

//USER
route.get("/fetch", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
route.post('/signup', signup);
route.post('/signin', signin)
export default route;