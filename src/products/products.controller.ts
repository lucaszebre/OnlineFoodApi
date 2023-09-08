/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product:Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Get(':productId/comment')
  async getProductComments(@Param('productId') productId: string) {
    // Use productId to retrieve comments for a specific product
  }

  @Post(':productId/comment')
  async addCommentToProduct(
    @Param('productId') productId: string,
    @Body() product:Product): Promise<Product>
  {
    return 
    // Use productId and createCommentDto to add a comment to a specific product
  }


  @Put(':id')
  update(@Param('id') id: number, @Body() product:Product): Promise<any> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
