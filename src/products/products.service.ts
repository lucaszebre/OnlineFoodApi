/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Comment } from 'src/comments/entities/comment.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private commentRepository: Repository<Comment>,
  ) {}
  async create(user: Partial<Product>): Promise<Product> {
    const newuser = this.productRepository.create(user);
    return this.productRepository.save(newuser);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findCommentOfProduct(product_id:number): Promise<Comment[]> {
    return this.commentRepository.find({where:{product_id}})
  }
  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, user);
    return this.productRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
