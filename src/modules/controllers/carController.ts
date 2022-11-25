import Car from "../entities/car";
import CarService from "../services/carService";
import GenericController from "./genericController";

export default class CarController extends GenericController<Car>{
    constructor() {
        let carService: CarService = new CarService();
        super(carService);
    }
}