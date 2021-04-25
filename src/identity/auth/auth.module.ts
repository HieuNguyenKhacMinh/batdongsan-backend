import { UserEntity } from 'src/database.module/entities/user.entity';
import { OrganizationEntity } from './../../database.module/entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrganizationEntity, UserEntity])],
    controllers: [
        AuthController,],
    providers: [AuthService],
})
export class AuthModule { }
