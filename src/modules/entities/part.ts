import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import IEntity from "./IEntity";
import Os from "./os";

@Entity()
export default class Part implements IEntity {

    @Column()
    public status!: boolean;

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public createDate!: Date;

    @Column()
    public updateDate!: Date;

    @Column()
    public partName!: string;

    @Column()
    public partSerial!: string;

    @Column()
    public price!: number;

    @ManyToOne(() => Os, (os) => os.listParts)
    public os!: Os;

} 