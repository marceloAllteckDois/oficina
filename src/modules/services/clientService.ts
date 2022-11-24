import Client from "../entities/client";
import clientRepository from "../repositories/clientRepository";
import { IService } from "./IService";

export default class clientService implements IService<Client>{

    private clientRepository: clientRepository = new clientRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Client): void {
        this.clientRepository.save(object);
    }
    update(object: Client): void {
        this.clientRepository.update(object);
    }
    findAll(): Client[] {
        this.promiseReturn = this.clientRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Client>()});
        return this.returnPromissed;
    }
    findById(object: Client): Client {
        this.promiseReturn = this.clientRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Client>()});
        return this.returnPromissed;
    }
    find(objectQuery: Client): Client[] {
        this.promiseReturn = this.clientRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Client>()});
        return this.returnPromissed;
    }
    delete(object: Client): void {
        this.clientRepository.delete(object);
    }
    
}