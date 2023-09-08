/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CommentsService } from 'src/comments/comments.service';
import { ReportsService } from 'src/reports/reports.service';
import { ReservationsService } from 'src/reservations/reservations.service';
@Controller('users')
    export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly commentService:CommentsService,
        private readonly reportService:ReportsService,
        private readonly reservationService: ReservationsService,
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
    // // Get all the order of a user 
    // @Get(':userId/order')
    // async getUserOrders(@Param('userId') userId: string) {
    //     return this.commentService.findAllCommentUser(parseInt(userId))
    // }
    // Get all the Report of a user 
    @Get(':userId/reports')
    async getUserReports(@Param('userId') userId: string) {
        return this.reportService.findAllReportUser(parseInt(userId))
    }
    // Get all the reservation of a user 
    @Get(':userId/reservations')
    async getUserReservation(@Param('userId') userId: string) {
        return this.reservationService.findAllReservationUser(parseInt(userId))
    }
    }
