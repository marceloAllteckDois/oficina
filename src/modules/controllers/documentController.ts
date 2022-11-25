import Document from "../entities/document";
import documentService from "../services/documentService";
import GenericController from "./genericController";

export default class DocumentController extends GenericController<Document>{
    constructor(){
        super(new documentService())
    }
}