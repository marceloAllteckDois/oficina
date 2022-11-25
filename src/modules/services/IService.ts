import { DeleteResult } from "typeorm";

export interface IService<T> {
    save(object: T): T;
    update(object: T): T;
    findAll(): Array<T>;
    findById(object: T): T;
    find(objectQuery: T): Array<T>;
    delete(object: T): DeleteResult;
}