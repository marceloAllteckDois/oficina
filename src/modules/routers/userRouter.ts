import { Router } from "express";
import UserController from "../controllers/userController";

const usersRouter = Router();
const usersController:UserController = new UserController();

usersRouter.post('/users/save', usersController.save);
usersRouter.post('/users/update', usersController.update);
usersRouter.post('/users/delete', usersController.delete);
usersRouter.post('/users/save', usersController.save);
usersRouter.post('/users/find', usersController.find);
usersRouter.post('/users/', usersController.findAll);
usersRouter.post('/users/findone', usersController.findById);

