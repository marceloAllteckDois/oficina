import Task from "../entities/task";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class TaskRepository extends GenericRepository<Task>{
    constructor() {
        super(dataSource.getRepository(Task));
    }
}   