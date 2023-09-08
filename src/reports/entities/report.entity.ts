/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class  Report  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    text:string

    @Column()
    user_id:number

}