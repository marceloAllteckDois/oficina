import Contact from "../entities/contact";
import contactService from "../services/contactService";
import GenericController from "./genericController";

export default class ContactController extends GenericController<Contact>{
    constructor(){
        super(new contactService())
    }
}