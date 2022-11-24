import Addres from "../entities/addres";
import AddresRepository from "../repositories/addresRepository";
import { IService } from "./IService";

export default class AddresService implements IService<Addres> {

    private addresRepository: AddresRepository = new AddresRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Addres): void {
        this.addresRepository.save(object);
    }
    update(object: Addres): void {
        this.addresRepository.update(object);
    }
    findAll(): Addres[] {
        this.promiseReturn = this.addresRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Addres>()});
        return this.returnPromissed;
    }
    findById(object: Addres): Addres {
        this.promiseReturn = this.addresRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Addres>()});
        return this.returnPromissed;
    }
    find(objectQuery: Addres): Addres[] {
        this.promiseReturn = this.addresRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Addres>()});
        return this.returnPromissed;
    }
    delete(object: Addres): void {
        this.addresRepository.delete(object);
    }

}