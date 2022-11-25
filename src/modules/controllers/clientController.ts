import Client from "../entities/client";
import ClientService from "../services/clientService";
import GenericController from "./genericController";

export default class ClientController extends GenericController<Client>{
    constructor() {
        let clientService: ClientService = new ClientService();
        super(clientService);
    }
    
}