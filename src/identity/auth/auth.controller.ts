import { OrganizationEntity } from './../../database.module/entities/organization.entity';
import { LoginReqDto } from './dto/login.req.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
        return this.authService.register(dto);

    }

    @Post('login')
    async login(@Body() dto: LoginReqDto) {
        return this.authService.login(dto);
    }


}
