import Employe from "../entities/employe";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class EmployeRepository extends GenericRepository<Employe>{
    constructor() {
        super(dataSource.getRepository(Employe));
    }
}
