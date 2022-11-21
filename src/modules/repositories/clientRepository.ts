import Client from "../entities/client";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class ClientRepository extends GenericRepository<Client>{
    constructor() {
        super(dataSource.getRepository(Client));
    }
}