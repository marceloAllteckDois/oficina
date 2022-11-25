import Part from "../entities/part";
import partService from "../services/partService";
import GenericController from "./genericController";

export default class PartController extends GenericController<Part>{
    constructor() {
        super(new partService());
    }
}