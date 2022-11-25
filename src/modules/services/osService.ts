import Os from "../entities/os";
import GenericRepository from "../repositories/genericRepository";
import OsRepository from "../repositories/osRepository";
import osRepository from "../repositories/osRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class osService extends GenericService<Os>{

    constructor() {
        let osRepository: OsRepository = new OsRepository();
        super(osRepository);
    }
    
}