/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity'
@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}
  async create(reservation: Partial<Reservation>): Promise<Reservation> {
    const reser = this.reservationRepository.create(reservation);
    return this.reservationRepository.save(reser);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  } 
  async findAllReservationUser(user_id:number): Promise<Reservation[]> {
    return this.reservationRepository.find({where:{user_id}});
  }

  async findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({ where: { id } });
  }

  async update(id: number, reser: Partial<Reservation>): Promise<Reservation> {
    await this.reservationRepository.update(id, reser);
    return this.reservationRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
