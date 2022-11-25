import User from "../entities/user";
import userService from "../services/userService";
import GenericController from "./genericController";

export default class UserController extends GenericController<User>{
    constructor() {
        super(new userService());
    }
    
}