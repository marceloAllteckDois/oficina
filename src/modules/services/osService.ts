import Os from "../entities/os";
import osRepository from "../repositories/osRepository";
import { IService } from "./IService";

export default class osService implements IService<Os>{

    private osRepository: osRepository = new osRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Os): void {
        this.osRepository.save(object);
    }
    update(object: Os): void {
        this.osRepository.update(object);
    }
    findAll(): Os[] {
        this.promiseReturn = this.osRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Os>()});
        return this.returnPromissed;
    }
    findById(object: Os): Os {
        this.promiseReturn = this.osRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Os>()});
        return this.returnPromissed;
    }
    find(objectQuery: Os): Os[] {
        this.promiseReturn = this.osRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Os>()});
        return this.returnPromissed;
    }
    delete(object: Os): void {
        this.osRepository.delete(object);
    }
    
}