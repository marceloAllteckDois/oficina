import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, OneToOne } from "typeorm"
import Addres from "./addres";
import Car from "./car";
import Os from "./os";
import Document from "./document";
import Contact from "./contact";
import IEntity from "./IEntity";

@Entity()
export default class Client implements IEntity {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public completeName!: string;

    @Column()
    public birthDate!: Date;

    @Column()
    public createDate!: Date;

    @Column()
    public updateDate!: Date;

    @ManyToMany(() => Addres)
    @JoinTable()
    public addresList!: Array<Addres>;

    @ManyToMany(() => Car)
    @JoinTable()
    public carList!: Array<Car>;

    @OneToMany(() => Os, (os) => os.client)
    public OsList!: Array<Os>;

    @OneToMany(() => Document, (document) => document.client)
    public documentList!: Array<Document>;

    @OneToOne(() => Contact)
    public contact!: Contact
}