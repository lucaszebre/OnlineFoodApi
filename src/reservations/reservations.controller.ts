/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() reservation:Reservation): Promise<Reservation> {
    return this.reservationsService.create(reservation);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reservationsService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() reservation:Reservation): Promise<any>{
    return this.reservationsService.update(id, reservation);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reservationsService.delete(id);
  }
}
