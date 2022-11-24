import Addres from './../entities/addres';
import GenericRepository from './genericRepository';
import dataSource from '../../config/dataSource';

export default class AddresRepository extends GenericRepository<Addres>{
    constructor() {
        super(dataSource.getRepository(Addres));
    }

    async findById(object: Addres): Promise<Addres | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Addres): Promise<Array<Addres>> {
        throw new Error("Method not implemented.");
    }
}