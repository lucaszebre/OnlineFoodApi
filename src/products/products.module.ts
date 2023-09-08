/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CommentsModule } from 'src/comments/comments.module';
import { Repository } from 'typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([Product]),CommentsModule],
  controllers: [ProductsController],
  providers: [ProductsService,Repository],
  exports:[ProductsService],
})
export class ProductsModule {}
