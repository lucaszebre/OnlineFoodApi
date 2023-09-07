/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItem } from './entities/order-item.entity'

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() orderitem:OrderItem): Promise<OrderItem>  {
    return this.orderItemsService.create(orderitem);
  }

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() OrderItem:OrderItem): Promise<any>  {
    return this.orderItemsService.update(id, OrderItem);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderItemsService.delete(id);
  }
}
