import Addres from "../entities/addres";
import AddresRepository from "../repositories/addresRepository";
import { IService } from "./IService";

export default class AddresService implements IService<Addres> {

    private addresRepository: AddresRepository = new AddresRepository();
    private promiseReturn!: Promise<any | null>;

    save(object: Addres): void {
        this.addresRepository.save(object);
    }
    update(object: Addres): void {
        throw new Error("Method not implemented.");
    }
    findAll(): Addres[] {
        throw new Error("Method not implemented.");
    }
    findById(object: Addres): Addres {
        throw new Error("Method not implemented.");
    }
    find(objectQuery: Addres): Addres[] {
        throw new Error("Method not implemented.");
    }
    delete(object: Addres): void {
        throw new Error("Method not implemented.");
    }

}