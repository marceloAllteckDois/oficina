import Os from "../entities/os";
import osService from "../services/osService";
import GenericController from "./genericController";

export default class OsController extends GenericController<Os>{
    constructor() {
        super(new osService());
    }
}