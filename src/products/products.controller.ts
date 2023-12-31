/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/entities/comment.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/users/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/users/users.guard';
@Controller('products')
export class ProductsController {
  
  constructor(private readonly productsService: ProductsService,
    private readonly commentService :CommentsService) {}
  @Roles(Role.Admin)
  @UseGuards(AuthGuard,RolesGuard)
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
    return this.productsService.findCommentOfProduct(parseInt(productId))
  }
  @Roles(Role.Admin,Role.User)
  @UseGuards(AuthGuard,RolesGuard)
  @UseGuards(AuthGuard)
  @Post(':productId/comment')
  async addCommentToProduct(
    @Param('productId') productId: number,
    @Body() comment:Comment): Promise<Comment>
  {
    return this.commentService.create({...comment,product_id:productId})
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard,RolesGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() product:Product): Promise<any> {
    return this.productsService.update(id, product);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard,RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
