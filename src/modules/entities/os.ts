import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Os {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public entranceDate!: Date;

    @Column()
    public finishedDate!: Date;

    @Column()
    public OSCode!: string;


}