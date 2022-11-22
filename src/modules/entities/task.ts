import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import Employe from "./employe";
import IEntity from "./IEntity";
import Os from "./os";

@Entity()
export default class Task implements IEntity {

    @Column()
    public status!: boolean;

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public updateDate!: Date;

    @Column()
    public taskName!: string;

    @Column()
    public taskHour!: number;

    @Column()
    public taskValuePorHour!: number;

    @OneToOne(() => Employe)
    @JoinColumn()
    public employe!: Employe;

    @ManyToOne(() => Os, (os) => os.listTasks)
    public os!: Os;
}