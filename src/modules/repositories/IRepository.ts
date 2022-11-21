export interface IReposytory<T> {
    save(object: T);
    update(object: T);
    findAll(): Promise<Array<T>>;
    findById(object: T): Promise<T>;
    find(objectQuery: T): Promise<Array<T>>;
    delete(object: T);
}