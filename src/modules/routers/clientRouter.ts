import { Router } from "express";
import ClientController from "../controllers/clientController";

const clientsRouter = Router();
const clientsController:ClientController = new ClientController();

clientsRouter.post('/clients/save', clientsController.save);
clientsRouter.post('/clients/update', clientsController.update);
clientsRouter.post('/clients/delete', clientsController.delete);
clientsRouter.post('/clients/save', clientsController.save);
clientsRouter.post('/clients/find', clientsController.find);
clientsRouter.post('/clients/', clientsController.findAll);
clientsRouter.post('/clients/findone', clientsController.findById);

