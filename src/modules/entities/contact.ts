import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import Client from "./client";
import Employe from "./employe";

@Entity()
export default class Contact {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public updateDate!: Date;

    @Column('simple-array', { array: true })
    public listEmail!: Array<string>;

    @Column('simple-array', { array: true })
    public listPhone!: Array<string>;
}