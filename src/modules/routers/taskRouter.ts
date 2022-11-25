import { Router } from "express";
import TaskController from "../controllers/taskController";

const tasksRouter = Router();
const tasksController:TaskController = new TaskController();

tasksRouter.post('/tasks/save', tasksController.save);
tasksRouter.post('/tasks/update', tasksController.update);
tasksRouter.post('/tasks/delete', tasksController.delete);
tasksRouter.post('/tasks/save', tasksController.save);
tasksRouter.post('/tasks/find', tasksController.find);
tasksRouter.post('/tasks/', tasksController.findAll);
tasksRouter.post('/tasks/findone', tasksController.findById);

