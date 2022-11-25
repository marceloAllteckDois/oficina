import { Router } from "express";
import CarController from "../controllers/carController";

const carsRouter = Router();
const carsController:CarController = new CarController();

carsRouter.post('/cars/save', carsController.save);
carsRouter.post('/cars/update', carsController.update);
carsRouter.post('/cars/delete', carsController.delete);
carsRouter.post('/cars/save', carsController.save);
carsRouter.post('/cars/find', carsController.find);
carsRouter.post('/cars/', carsController.findAll);
carsRouter.post('/cars/findone', carsController.findById);

