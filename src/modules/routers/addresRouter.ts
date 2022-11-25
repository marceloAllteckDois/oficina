import { Router } from "express";
import AddresController from "../controllers/addresController";

const addressRouter = Router();
const addressController:AddresController = new AddresController();

addressRouter.post('/address/save', addressController.save);
addressRouter.post('/address/update', addressController.update);
addressRouter.post('/address/delete', addressController.delete);
addressRouter.post('/address/save', addressController.save);
addressRouter.post('/address/find', addressController.find);
addressRouter.post('/address/', addressController.findAll);
addressRouter.post('/address/findone', addressController.findById);

