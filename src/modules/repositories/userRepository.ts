import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
import User from "./../entities/user";
export default class UserRepository extends GenericRepository<User>{
    constructor() {
        super(dataSource.getRepository(User));
    }

    async findById(object: User): Promise<User | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: User): Promise<Array<User>> {
        throw new Error("Method not implemented.");
    }
}