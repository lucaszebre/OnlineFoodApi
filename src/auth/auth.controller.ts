/* eslint-disable prettier/prettier */
import { Body, Controller, Post,UseGuards,Get,Request } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { AuthGuard } from './auth.guard';

import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService, // Inject the AuthService
        ) {}
    //post / signup
    @Post('/register')
    async addUser(
        @Body('password') userPassword: string,
        @Body('email') email: string,
        @Body('name') name: string
    ) {
    const saltOrRounds = 10;
    const password = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.create(
        {email,password,name}
    );
    return {
        msg: 'User successfully registered',
        email: result.email
    };
    }
    @UseGuards(AuthGuard)

    @Post('/login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
