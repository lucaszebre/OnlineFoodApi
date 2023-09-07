/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { ProductsModule } from './products/products.module';
import { CommentsModule } from './comments/comments.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ReportsModule } from './reports/reports.module';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3001,
      password: '',
      username: 'postgres',
      database: 'blogpost',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    ProductsModule,
    CommentsModule,
    ReservationsModule,
    ReportsModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
})
export class AppModule {}
