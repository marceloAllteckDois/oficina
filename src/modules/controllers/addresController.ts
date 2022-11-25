import Addres from "../entities/addres";
import AddresService from "../services/AddresService";
import GenericController from "./genericController";

export default class AddresController extends GenericController<Addres>{
    constructor() {
        let addresService: AddresService = new AddresService();
        super(addresService);
    }
}