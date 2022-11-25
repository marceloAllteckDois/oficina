import Task from "../entities/task";
import taskService from "../services/taskService";
import GenericController from "./genericController";

export default class TaskController extends GenericController<Task>{
    constructor() {
        super(new taskService());
    }
}