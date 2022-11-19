import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import Car from "./car";

@Entity()
export default class Part {

    @PrimaryGeneratedColumn()
    public id!: number;

    @ManyToOne(() => Car, (car) => car.listPats)
    public car!: Car;
} 