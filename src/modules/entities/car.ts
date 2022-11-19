import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import Part from "./part";

@Entity()
export default class Car {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createdDate!: Date;

    @Column()
    public brand!: string;

    @Column()
    public name!: string;

    @Column()
    public plate!: string;

    @OneToMany(() => Part, (part) => part.car)
    public listPats!: Array<Part>;


}