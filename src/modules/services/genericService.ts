import { DeleteResult } from "typeorm";
import { IReposytory } from "../repositories/IRepository";
import { IService } from "./IService";

export default abstract class GenericService<T> implements IService<T> {

    private genericRepository!: IReposytory<T>;
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    constructor(genericRepository: IReposytory<T>) {
        this.genericRepository = genericRepository;
    }

    save(object: T): T {
        this.promiseReturn = this.genericRepository.save(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = null});
        return this.returnPromissed;
    }
    update(object: T): T {
        this.promiseReturn = this.genericRepository.update(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = null});
        return this.returnPromissed;
    }
    findAll(): T[] {
        this.promiseReturn = this.genericRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<T>()});
        return this.returnPromissed;
    }
    findById(object: T): T {
        this.promiseReturn = this.genericRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<T>()});
        return this.returnPromissed;
    }
    find(objectQuery: T): T[] {
        this.promiseReturn = this.genericRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<T>()});
        return this.returnPromissed;
    }
    delete(object: T): DeleteResult {
        this.promiseReturn = this.genericRepository.delete(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = null});
        return this.returnPromissed;
    }

}