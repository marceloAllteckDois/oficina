import Os from "../entities/os";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class OsRepository extends GenericRepository<Os>{
    constructor() {
        super(dataSource.getRepository(Os));
    }

    async findById(object: Os): Promise<Os | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Os): Promise<Array<Os>> {
        throw new Error("Method not implemented.");
    }
}