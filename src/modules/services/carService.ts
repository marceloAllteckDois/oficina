import Car from "../entities/car";
import CarRepository from "../repositories/carRepository";
import { IService } from "./IService";

export default class CarService implements IService<Car>{

    private carRepository: CarRepository = new CarRepository();
    private promiseReturn!: Promise<any | null>;
    private returnPromissed!: any;

    save(object: Car): void {
        this.carRepository.save(object);
    }
    update(object: Car): void {
        this.carRepository.update(object);
    }
    findAll(): Car[] {
        this.promiseReturn = this.carRepository.findAll();
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Car>()});
        return this.returnPromissed;
    }
    findById(object: Car): Car {
        this.promiseReturn = this.carRepository.findById(object);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Car>()});
        return this.returnPromissed;
    }
    find(objectQuery: Car): Car[] {
        this.promiseReturn = this.carRepository.find(objectQuery);
        this.promiseReturn.then(value => {this.returnPromissed = value}).catch(value => {this.returnPromissed = new Array<Car>()});
        return this.returnPromissed;
    }
    delete(object: Car): void {
        this.carRepository.delete(object);
    }
    
}