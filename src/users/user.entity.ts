/* eslint-disable prettier/prettier */
import { Role } from 'src/enums/role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column({type:'enum',enum:Role,default:Role.User})
    role: Role;
    
}
