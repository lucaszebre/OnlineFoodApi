/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() comment:Comment): Promise<Comment>  {
    return this.commentsService.create(comment);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentsService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() comment:Comment): Promise<any>  {
    return this.commentsService.update(id, comment);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentsService.delete(id);
  }
}
