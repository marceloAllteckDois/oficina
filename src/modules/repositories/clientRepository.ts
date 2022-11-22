import Client from "../entities/client";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class ClientRepository extends GenericRepository<Client>{
    constructor() {
        super(dataSource.getRepository(Client));
    }

    async findById(object: Client): Promise<Client | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Client): Promise<Array<Client>> {
        throw new Error("Method not implemented.");
    }
}