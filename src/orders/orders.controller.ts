/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { Order } from './entities/orders.entity';
import { OrdersService } from './orders.service';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() Order:Order): Promise<Order>  {
    return this.ordersService.create(Order);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() Order:Order): Promise<any>  {
    return this.ordersService.update(id, Order);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ordersService.delete(id);
  }

}
