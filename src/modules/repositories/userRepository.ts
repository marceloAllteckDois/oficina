import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
import User from "./../entities/user";
export default class UserRepository extends GenericRepository<User>{
    constructor() {
        super(dataSource.getRepository(User));
    }

}