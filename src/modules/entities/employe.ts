import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Addres from "./addres";
import Contact from "./contact";
import Document from "./document";

@Entity()
export default class Employe {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public admissionDate!: Date;

    @Column()
    public updateDate!: Date;

    @Column()
    public employeName!: string;

    @Column()
    public employeBirthDate!: Date;

    @OneToMany(() => Document, (document) => document.employe)
    public employeListDocuments!: Array<Document>;

    @OneToOne(() => Addres)
    @JoinColumn()
    public employeAddres!: Addres;

    @OneToOne(() => Contact)
    public contact!: Contact;

}