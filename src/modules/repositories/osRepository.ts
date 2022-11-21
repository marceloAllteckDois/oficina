import Os from "../entities/os";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class OsRepository extends GenericRepository<Os>{
    constructor() {
        super(dataSource.getRepository(Os));
    }

}