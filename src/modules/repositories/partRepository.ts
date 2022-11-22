import Part from "../entities/part";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class PartRepository extends GenericRepository<Part>{
    constructor() {
        super(dataSource.getRepository(Part));
    }

    async findById(object: Part): Promise<Part | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Part): Promise<Array<Part>> {
        throw new Error("Method not implemented.");
    }
}