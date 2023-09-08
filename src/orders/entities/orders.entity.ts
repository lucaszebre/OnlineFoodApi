/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    user_id: number;

    @Column()
    order_date: string;

    @Column()
    total_price: string;
    
    @Column()
    status: boolean;
    
    @Column()
    recipe: JSON;
}