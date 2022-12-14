import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import Client from "./client";
import IEntity from "./IEntity";

@Entity()
export default class Addres implements IEntity {

    public className: string = 'address';

    @Column()
    public status!: boolean;

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public zipCode!: string;

    @Column()
    public addresDefinition!: string;

    @Column()
    public addresName!: string;

    @Column()
    public addresNumber!: string;

    @Column()
    public district!: string;

    @Column()
    public city!: string;

    @Column()
    public state!: string;

    @ManyToMany(() => Client)
    @JoinTable()
    public clientList!: Array<Client>;
}