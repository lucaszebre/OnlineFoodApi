/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CommentsService } from 'src/comments/comments.service';
@Controller('users')
    export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly commentService:CommentsService
        ) {}

    //get all users
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    //get user by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        const user = await this.usersService.findByID(id);
        if (!user) {
        throw new NotFoundException('User does not exist!');
        } else {
        return user;
        }
    }

    //create user
    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    //update user
    @Put(':id')
    async update (@Param('id') id: number, @Body() user: User): Promise<any> {
        return this.usersService.update(id, user);
    }

    //delete user
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        //handle error if user does not exist
        const user = await this.usersService.findByID(id);
        if (!user) {
        throw new NotFoundException('User does not exist!');
        }
        return this.usersService.delete(id);
    }
    // Get all the comment of a user 
    @Get(':userId/comment')
    async getUserComments(@Param('userId') userId: string) {
        return this.commentService.findAllCommentUser(parseInt(userId))
    }
    }
