import User from "../entities/user";
import userRepository from "../repositories/userRepository";
import { IService } from "./IService";

export default class userService implements IService<User>{

    private userRepository: userRepository = new userRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: User): void {
        this.userRepository.save(object);
    }
    update(object: User): void {
        this.userRepository.update(object);
    }
    findAll(): User[] {
        this.promiseReturn = this.userRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<User>()});
        return this.returnPromissed;
    }
    findById(object: User): User {
        this.promiseReturn = this.userRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<User>()});
        return this.returnPromissed;
    }
    find(objectQuery: User): User[] {
        this.promiseReturn = this.userRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<User>()});
        return this.returnPromissed;
    }
    delete(object: User): void {
        this.userRepository.delete(object);
    }
    
}