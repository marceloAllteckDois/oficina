import Employe from "../entities/employe";
import EmployeService from "../services/employeService";
import GenericController from "./genericController";

export default class EmployeController extends GenericController<Employe>{
    constructor() {
        super(new EmployeService());
    }
}