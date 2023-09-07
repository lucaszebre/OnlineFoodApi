/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity'
@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
  ) {}
  async create(OrderItem: Partial<OrderItem>): Promise<OrderItem> {
    const newuser = this.orderItemsRepository.create(OrderItem);
    return this.orderItemsRepository.save(newuser);
  }

  async findAll(): Promise<OrderItem[]> {
    return this.orderItemsRepository.find();
  }

  async findOne(id: number): Promise<OrderItem> {
    return this.orderItemsRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<OrderItem>): Promise<OrderItem> {
    await this.orderItemsRepository.update(id, user);
    return this.orderItemsRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.orderItemsRepository.delete(id);
  }
}
