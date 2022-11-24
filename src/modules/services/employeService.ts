import Employe from "../entities/employe";
import employeRepository from "../repositories/employeRepository";
import { IService } from "./IService";

export default class employeService implements IService<Employe>{

    private employeRepository: employeRepository = new employeRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Employe): void {
        this.employeRepository.save(object);
    }
    update(object: Employe): void {
        this.employeRepository.update(object);
    }
    findAll(): Employe[] {
        this.promiseReturn = this.employeRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Employe>()});
        return this.returnPromissed;
    }
    findById(object: Employe): Employe {
        this.promiseReturn = this.employeRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Employe>()});
        return this.returnPromissed;
    }
    find(objectQuery: Employe): Employe[] {
        this.promiseReturn = this.employeRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Employe>()});
        return this.returnPromissed;
    }
    delete(object: Employe): void {
        this.employeRepository.delete(object);
    }
    
}