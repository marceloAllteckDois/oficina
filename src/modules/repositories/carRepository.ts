import Car from "../entities/car";
import dataSource from "./../../config/dataSource";
import GenericRepository from "./genericRepository";
export default class CarRepository extends GenericRepository<Car>{
    constructor() {
        super(dataSource.getRepository(Car));
    }

    async findById(object: Car): Promise<Car | null> {
        return await this.repository.findOne({ where: [{ id: object.id }] });
    }

    async find(objectQuery: Car): Promise<Array<Car>> {
        throw new Error("Method not implemented.");
    }
}