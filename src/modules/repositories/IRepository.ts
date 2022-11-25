import { DeleteResult } from "typeorm";

export interface IReposytory<T> {
    save(object: T): Promise<T | null>;
    update(object: T): Promise<T | null>;
    findAll(): Promise<Array<T>>;
    findById(object: T): Promise<T | null>;
    find(objectQuery: T): Promise<Array<T>>;
    delete(object: T): Promise<DeleteResult | null>;
}