import Car from "../entities/car";
import CarRepository from "../repositories/carRepository";
import GenericService from "./genericService";
import { IService } from "./IService";

export default class CarService extends GenericService<Car>{

    constructor() {
        let carRepository: CarRepository = new CarRepository();
        super(carRepository);
    }
    
}