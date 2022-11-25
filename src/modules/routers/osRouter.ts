import { Router } from "express";
import OsController from "../controllers/osController";

const ossRouter = Router();
const ossController:OsController = new OsController();

ossRouter.post('/oss/save', ossController.save);
ossRouter.post('/oss/update', ossController.update);
ossRouter.post('/oss/delete', ossController.delete);
ossRouter.post('/oss/save', ossController.save);
ossRouter.post('/oss/find', ossController.find);
ossRouter.post('/oss/', ossController.findAll);
ossRouter.post('/oss/findone', ossController.findById);

