/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity'
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() report:Report): Promise<any>  {
    return this.reportsService.update(id, report);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reportsService.delete(id);
  }
}
