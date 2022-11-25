import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import IEntity from "./IEntity";

@Entity()
export default class User implements IEntity {

    public className: string = 'user';

    @Column()
    public status!: boolean;

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public updateDate!: Date;

    @Column()
    public login!: string;

    @Column()
    public email!: string;

    @Column()
    public password!: string;

    @Column()
    public phone!: string;
}