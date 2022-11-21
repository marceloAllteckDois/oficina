import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
import Document from "../entities/document";
export default class DocumentRepository extends GenericRepository<Document>{
    constructor() {
        super(dataSource.getRepository(Document));
    }
}