import Task from "../entities/task";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class TaskRepository extends GenericRepository<Task>{
    constructor() {
        super(dataSource.getRepository(Task));
    }

    async findById(object: Task): Promise<Task | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Task): Promise<Array<Task>> {
        throw new Error("Method not implemented.");
    }
}   