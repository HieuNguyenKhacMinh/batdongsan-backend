import { OrganizationEntity } from './../../database.module/entities/organization.entity';
import { LoginReqDto } from './dto/login.req.dto';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericService } from 'src/common/generic.service';
import { UserEntity } from 'src/database.module/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import { RegisterReqDto } from './dto/register.req.dto';
import { AuthService } from './auth.service';

@ApiTags("Identity/Auth")
@Controller('identity/auth')
export class AuthController {
    constructor(
        private authService: AuthService

    ) {
    }

    @Post('register')
    async register(@Body() dto: RegisterReqDto) {
        const data = await this.authService.register(dto);
        if (data instanceof Error) {
            throw new HttpException(data.message, HttpStatus.BAD_REQUEST)
        }
        return data;
    }

    @Post('login')
    async login(@Body() dto: LoginReqDto) {
        const data = await this.authService.login(dto);
        if (data instanceof Error) {
            throw new HttpException(data.message, HttpStatus.BAD_REQUEST)
        }
        return data;
    }
}
