import Part from "../entities/part";
import GenericRepository from "../repositories/genericRepository";
import PartRepository from "../repositories/partRepository";
import partRepository from "../repositories/partRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class partService extends GenericService<Part>{

    constructor() {
        let partRepository: PartRepository = new PartRepository();
        super(partRepository);
    }
    
}