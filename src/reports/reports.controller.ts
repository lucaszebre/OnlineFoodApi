/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity'

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  create(@Body() report:Report): Promise<Report>  {
    return this.reportsService.create(report);
  }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reportsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() report:Report): Promise<any>  {
    return this.reportsService.update(id, report);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reportsService.delete(id);
  }
}
