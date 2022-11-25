import { Router } from "express";
import PartController from "../controllers/partController";

const partsRouter = Router();
const partsController:PartController = new PartController();

partsRouter.post('/parts/save', partsController.save);
partsRouter.post('/parts/update', partsController.update);
partsRouter.post('/parts/delete', partsController.delete);
partsRouter.post('/parts/save', partsController.save);
partsRouter.post('/parts/find', partsController.find);
partsRouter.post('/parts/', partsController.findAll);
partsRouter.post('/parts/findone', partsController.findById);

