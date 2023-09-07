/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() reservation:Reservation): Promise<Reservation> {
    return this.reservationsService.create(reservation);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reservationsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() reservation:Reservation): Promise<any>{
    return this.reservationsService.update(id, reservation);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reservationsService.delete(id);
  }
}
