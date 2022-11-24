import { Repository } from "typeorm";
import IEntity from "../entities/IEntity";
import { IReposytory } from "./IRepository";

export default abstract class GenericRepository<T extends IEntity> implements IReposytory<T> {

    protected repository: Repository<T>

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async save(object: T) {
        await this.repository.save(object);
    }
    async update(object: T) {
        await this.repository.delete(object.id);
        await this.repository.save(object);
    }
    async findAll(): Promise<Array<T>> {
        return await this.repository.find();
    }
    async findById(object: T): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    async find(objectQuery: T): Promise<Array<T>> {
        throw new Error("Method not implemented.");
    }
    async delete(object: T) {
        await this.repository.delete(object.id);
    }

}