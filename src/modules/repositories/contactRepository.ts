import Contact from "../entities/contact";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class ContactRepository extends GenericRepository<Contact>{
    constructor() {
        super(dataSource.getRepository(Contact));
    }

    async findById(object: Contact): Promise<Contact | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Contact): Promise<Array<Contact>> {
        throw new Error("Method not implemented.");
    }
}