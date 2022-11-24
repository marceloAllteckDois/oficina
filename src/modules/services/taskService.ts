import Task from "../entities/task";
import taskRepository from "../repositories/taskRepository";
import { IService } from "./IService";

export default class taskService implements IService<Task>{

    private taskRepository: taskRepository = new taskRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Task): void {
        this.taskRepository.save(object);
    }
    update(object: Task): void {
        this.taskRepository.update(object);
    }
    findAll(): Task[] {
        this.promiseReturn = this.taskRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Task>()});
        return this.returnPromissed;
    }
    findById(object: Task): Task {
        this.promiseReturn = this.taskRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Task>()});
        return this.returnPromissed;
    }
    find(objectQuery: Task): Task[] {
        this.promiseReturn = this.taskRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Task>()});
        return this.returnPromissed;
    }
    delete(object: Task): void {
        this.taskRepository.delete(object);
    }
    
}