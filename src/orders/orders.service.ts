/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}
  async create(user: Partial<Order>): Promise<Order> {
    const newuser = this.orderRepository.create(user);
    return this.orderRepository.save(newuser);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async findOrderUsers(user_id:number): Promise<Order[]> {
    return this.orderRepository.find({where:{user_id}})
  }
  async findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, user);
    return this.orderRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}