/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity'
@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}
  async create(Report: Partial<Report>): Promise<Report> {
    const newuser = this.reportRepository.create(Report);
    return this.reportRepository.save(newuser);
  }

  async findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async findOne(id: number): Promise<Report> {
    return this.reportRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Report>): Promise<Report> {
    await this.reportRepository.update(id, user);
    return this.reportRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.reportRepository.delete(id);
  }
}
