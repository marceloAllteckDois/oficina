import { Router } from "express";
import EmployeController from "../controllers/employeController";

const employesRouter = Router();
const employesController:EmployeController = new EmployeController();

employesRouter.post('/employes/save', employesController.save);
employesRouter.post('/employes/update', employesController.update);
employesRouter.post('/employes/delete', employesController.delete);
employesRouter.post('/employes/save', employesController.save);
employesRouter.post('/employes/find', employesController.find);
employesRouter.post('/employes/', employesController.findAll);
employesRouter.post('/employes/findone', employesController.findById);

