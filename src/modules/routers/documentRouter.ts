import { Router } from "express";
import DocumentController from "../controllers/documentController";

const documentsRouter = Router();
const documentsController:DocumentController = new DocumentController();

documentsRouter.post('/documents/save', documentsController.save);
documentsRouter.post('/documents/update', documentsController.update);
documentsRouter.post('/documents/delete', documentsController.delete);
documentsRouter.post('/documents/save', documentsController.save);
documentsRouter.post('/documents/find', documentsController.find);
documentsRouter.post('/documents/', documentsController.findAll);
documentsRouter.post('/documents/findone', documentsController.findById);

