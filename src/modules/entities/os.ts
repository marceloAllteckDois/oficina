import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import Car from "./car";
import Client from "./client";
import IEntity from "./IEntity";
import Part from "./part";
import Task from "./task";

@Entity()
export default class Os implements IEntity {

    public className: string = 'os';

    @Column()
    public status!: boolean;

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public entranceDate!: Date;

    @Column()
    public finishedDate!: Date;

    @Column()
    public OSCode!: string;

    @ManyToOne(() => Client, (client) => client.OsList)
    public client!: Client;

    @ManyToOne(() => Car, (car) => car.listOs)
    public car!: Car;

    @OneToMany(() => Part, (part) => part.os)
    public listParts!: Array<Part>;

    @OneToMany(() => Task, (task) => task.os)
    public listTasks!: Array<Task>;

}