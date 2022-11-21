import Car from "../entities/car";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class CarRepository extends GenericRepository<Car>{
    constructor() {
        super(dataSource.getRepository(Car));
    }
}