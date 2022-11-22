import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
import Document from "../entities/document";
export default class DocumentRepository extends GenericRepository<Document>{
    constructor() {
        super(dataSource.getRepository(Document));
    }

    async findById(object: Document): Promise<Document | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Document): Promise<Array<Document>> {
        throw new Error("Method not implemented.");
    }
}