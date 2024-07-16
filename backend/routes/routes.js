import express from 'express';
import {addTask, getTasks, getTask, deleteTask , updateTask} from "../controllers/taskControllers.js"
const route = express.Router();

//  add task
route.post("/", addTask);
//  get all tasks
route.get("/", getTasks);
//  get task 
route.get("/:id", getTask);
//  delete task
route.delete("/:id", deleteTask);
//  update task
route.put("/:id", updateTask);

export default route;

