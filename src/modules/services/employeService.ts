import Employe from "../entities/employe";
import EmployeRepository from "../repositories/employeRepository";
import employeRepository from "../repositories/employeRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class employeService extends GenericService<Employe>{

    constructor() {
        let employeRepository: EmployeRepository = new EmployeRepository();
        super(employeRepository);
    }
    
}