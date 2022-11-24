import Document from "../entities/document";
import documentRepository from "../repositories/documentRepository";
import { IService } from "./IService";

export default class documentService implements IService<Document>{

    private documentRepository: documentRepository = new documentRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Document): void {
        this.documentRepository.save(object);
    }
    update(object: Document): void {
        this.documentRepository.update(object);
    }
    findAll(): Document[] {
        this.promiseReturn = this.documentRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Document>()});
        return this.returnPromissed;
    }
    findById(object: Document): Document {
        this.promiseReturn = this.documentRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Document>()});
        return this.returnPromissed;
    }
    find(objectQuery: Document): Document[] {
        this.promiseReturn = this.documentRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Document>()});
        return this.returnPromissed;
    }
    delete(object: Document): void {
        this.documentRepository.delete(object);
    }
    
}