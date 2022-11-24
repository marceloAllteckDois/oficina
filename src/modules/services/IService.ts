export interface IService<T> {
    save(object: T): void;
    update(object: T): void;
    findAll(): Array<T>;
    findById(object: T): T;
    find(objectQuery: T): Array<T>;
    delete(object: T): void;
}