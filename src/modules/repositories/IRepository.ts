export interface IReposytory<T> {
    save(object: T): void;
    update(object: T): void;
    findAll(): Promise<Array<T>>;
    findById(object: T): Promise<T | null>;
    find(objectQuery: T): Promise<Array<T>>;
    delete(object: T): void;
}