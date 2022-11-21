import Contact from "../entities/contact";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class ContactRepository extends GenericRepository<Contact>{
    constructor() {
        super(dataSource.getRepository(Contact));
    }
}