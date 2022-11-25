import { Request, Response } from "express";
import { DeleteResult, RepositoryNotTreeError } from "typeorm";
import IEntity from "../entities/IEntity";
import { IService } from "../services/IService";

export default abstract class GenericController<T extends IEntity> {

    private service!: IService<T>;

    constructor(service: IService<T>) {
        this.service = service;
    }

    public async save (request: Request, response: Response) {
        try {
            let object: T = request.body;
            object = this.service.save(object);
            response.status(201).json(object);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    public async update (request: Request, response: Response) {
        try {
            let object: T = request.body;
            object = this.service.update(object);
            response.status(201).json(object);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    public async findAll (request: Request, response: Response) {
        try {
            let object: T[] = this.service.findAll();
            response.status(200).json(object);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    public async findById (request: Request, response: Response) {
        try {
            let objectQuery: T = request.body;
            let object: T = this.service.findById(objectQuery);
            response.status(200).json(object);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    public async find (request: Request, response: Response) {
        try {
            let objectQuery: T = request.body;
            let object: T[] = this.service.find(objectQuery);
            response.status(200).json(object);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    public async delete (request: Request, response: Response) {
        try {
            let object : T = request.body;
            let deleteResult: DeleteResult = this.service.delete(object); 
            response.status(200).json(deleteResult);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }
    
}