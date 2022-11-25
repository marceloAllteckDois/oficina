import Client from "../entities/client";
import ClientRepository from "../repositories/clientRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class clientService extends GenericService<Client>{

    constructor() {
        let clientRepository: ClientRepository = new ClientRepository();
        super(clientRepository);
    }
    
}