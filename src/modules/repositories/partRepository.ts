import Part from "../entities/part";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class PartRepository extends GenericRepository<Part>{
    constructor() {
        super(dataSource.getRepository(Part));
    }
}