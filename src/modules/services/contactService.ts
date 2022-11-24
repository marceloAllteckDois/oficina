import Contact from "../entities/contact";
import contactRepository from "../repositories/contactRepository";
import { IService } from "./IService";

export default class contactService implements IService<Contact>{

    private contactRepository: contactRepository = new contactRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Contact): void {
        this.contactRepository.save(object);
    }
    update(object: Contact): void {
        this.contactRepository.update(object);
    }
    findAll(): Contact[] {
        this.promiseReturn = this.contactRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Contact>()});
        return this.returnPromissed;
    }
    findById(object: Contact): Contact {
        this.promiseReturn = this.contactRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Contact>()});
        return this.returnPromissed;
    }
    find(objectQuery: Contact): Contact[] {
        this.promiseReturn = this.contactRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Contact>()});
        return this.returnPromissed;
    }
    delete(object: Contact): void {
        this.contactRepository.delete(object);
    }
    
}