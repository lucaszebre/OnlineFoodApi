/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Recipe } from '../orders.interface';

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
    
    @Column({
        type: 'jsonb'
        })
        properties: Recipe
}