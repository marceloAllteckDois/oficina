import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class User {

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