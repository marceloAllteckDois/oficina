import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable, ManyToMany } from "typeorm"
import Client from "./client";
import IEntity from "./IEntity";
import Os from "./os";

@Entity()
export default class Car implements IEntity {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createdDate!: Date;

    @Column()
    public brand!: string;

    @Column()
    public color!: string;

    @Column()
    public name!: string;

    @Column()
    public plate!: string;

    @ManyToMany(() => Client)
    @JoinTable()
    public listClients!: Array<Client>;

    @OneToMany(() => Os, (os) => os.car)
    public listOs!: Array<Os>;


}