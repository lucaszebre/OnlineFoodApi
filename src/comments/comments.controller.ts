/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() comment:Comment): Promise<Comment>  {
    return this.commentsService.create(comment);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() comment:Comment): Promise<any>  {
    return this.commentsService.update(id, comment);
  }
  
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentsService.delete(id);
  }
}
