import Contact from "../entities/contact";
import ContactRepository from "../repositories/contactRepository";
import contactRepository from "../repositories/contactRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class contactService extends GenericService<Contact>{

    constructor() {
        let contactRepository: ContactRepository = new ContactRepository();
        super(contactRepository);
    }
    
}