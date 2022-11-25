import Document from "../entities/document";
import DocumentRepository from "../repositories/documentRepository";
import documentRepository from "../repositories/documentRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class documentService extends GenericService<Document>{

    constructor() {
        let documentRepository: DocumentRepository= new DocumentRepository();
        super(documentRepository);
    }
    
}