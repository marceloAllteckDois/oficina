import User from "../entities/user";
import GenericRepository from "../repositories/genericRepository";
import UserRepository from "../repositories/userRepository";
import userRepository from "../repositories/userRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class userService extends GenericService<User>{

    constructor() {
        let userRepository: UserRepository = new UserRepository();
        super(userRepository);
    }
    
}