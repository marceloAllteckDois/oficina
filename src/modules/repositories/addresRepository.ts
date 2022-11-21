import Addres from './../entities/addres';
import GenericRepository from './genericRepository';
import dataSource from '../../config/dataSource';
export default class AddresRepository extends GenericRepository<Addres>{
    constructor() {
        super(dataSource.getRepository(Addres));
    }
}