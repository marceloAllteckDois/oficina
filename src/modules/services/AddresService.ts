import { DeleteResult } from "typeorm";
import Addres from "../entities/addres";
import AddresRepository from "../repositories/addresRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class AddresService extends GenericService<Addres> {

    constructor() {
        let addresRepository: AddresRepository = new AddresRepository();
        super(addresRepository);
    }
}