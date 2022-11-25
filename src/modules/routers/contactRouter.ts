import { Router } from "express";
import ContactController from "../controllers/contactController";

const contactsRouter = Router();
const contactsController:ContactController = new ContactController();

contactsRouter.post('/contacts/save', contactsController.save);
contactsRouter.post('/contacts/update', contactsController.update);
contactsRouter.post('/contacts/delete', contactsController.delete);
contactsRouter.post('/contacts/save', contactsController.save);
contactsRouter.post('/contacts/find', contactsController.find);
contactsRouter.post('/contacts/', contactsController.findAll);
contactsRouter.post('/contacts/findone', contactsController.findById);

