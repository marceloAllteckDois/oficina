import { Request, Response } from "express";
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
            this.service.save(object);
            response.status(201).json()
        }
    }

    public async update (request: Request, response: Response) {

    }

    public async findAll (request: Request, response: Response) {

    }

    public async findById (request: Request, response: Response) {

    }

    public async find (request: Request, response: Response) {

    }

    public async delete (request: Request, response: Response) {

    }
    
}