/* eslint-disable prettier/prettier */
import { Body, Controller, Post,UseGuards,Get,Request } from '@nestjs/common';
import { UserService } from '../users/users.service'
import { AuthGuard } from './auth.guard';

import * as bcrypt from 'bcrypt';
@Controller('users')
export class AuthController {
    authService: any;
    constructor(private readonly usersService: UserService) {}
    //post / signup
    @Post('register')
    async addUser(
        @Body('password') userPassword: string,
        @Body('email') email: string,
    ) {
    const saltOrRounds = 10;
    const password = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.create(
        {email,password}
    );
    return {
        msg: 'User successfully registered',
        userId: result.id,
        userName: result.email
    };
    }
    @UseGuards(AuthGuard)

    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
