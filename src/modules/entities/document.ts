import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import Client from "./client";
import Employe from "./employe";

Entity()
export default class Document {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public documentName!: string;

    @Column()
    public documentNumber!: string;

    @ManyToOne(() => Client, (client) => client.documentList)
    public client!: Client;

    @ManyToOne(() => Employe, (employe) => employe.employeListDocuments)
    public employe!: Employe;
}