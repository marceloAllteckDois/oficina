import Part from "../entities/part";
import partRepository from "../repositories/partRepository";
import { IService } from "./IService";

export default class partService implements IService<Part>{

    private partRepository: partRepository = new partRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Part): void {
        this.partRepository.save(object);
    }
    update(object: Part): void {
        this.partRepository.update(object);
    }
    findAll(): Part[] {
        this.promiseReturn = this.partRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Part>()});
        return this.returnPromissed;
    }
    findById(object: Part): Part {
        this.promiseReturn = this.partRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Part>()});
        return this.returnPromissed;
    }
    find(objectQuery: Part): Part[] {
        this.promiseReturn = this.partRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Part>()});
        return this.returnPromissed;
    }
    delete(object: Part): void {
        this.partRepository.delete(object);
    }
    
}