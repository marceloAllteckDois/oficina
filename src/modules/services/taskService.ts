import Task from "../entities/task";
import TaskRepository from "../repositories/taskRepository";
import taskRepository from "../repositories/taskRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class taskService extends GenericService<Task>{

    constructor() {
        let taskRepository: TaskRepository = new TaskRepository();
        super(taskRepository);
    }
    
}