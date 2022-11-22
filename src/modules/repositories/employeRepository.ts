import Employe from "../entities/employe";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class EmployeRepository extends GenericRepository<Employe>{
    constructor() {
        super(dataSource.getRepository(Employe));
    }

    async findById(object: Employe): Promise<Employe | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Employe): Promise<Array<Employe>> {
        throw new Error("Method not implemented.");
    }
}
