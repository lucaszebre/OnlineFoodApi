/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { OrdersModule } from 'src/orders/orders.module';
import { CommentsModule } from 'src/comments/comments.module';
import { ReportsModule } from 'src/reports/reports.module';
import { ReservationsModule } from 'src/reservations/reservations.module';
import { RolesGuard } from './users.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User]),OrdersModule,CommentsModule,ReportsModule,ReservationsModule],
  controllers: [UsersController],
  providers: [UsersService,RolesGuard],
  exports: [UsersService],
})
export class UsersModule {}
