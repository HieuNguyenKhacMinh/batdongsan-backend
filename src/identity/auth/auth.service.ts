import { RegisterReqDto } from './dto/register.req.dto';
import { OrganizationEntity } from './../../database.module/entities/organization.entity';
import { UserEntity } from 'src/database.module/entities/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginReqDto } from './dto/login.req.dto';
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(OrganizationEntity)
        private organizationRepository: Repository<OrganizationEntity>,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    async register(dto: RegisterReqDto) {
        try {
            // check exist email 
            let user = await this.usersRepository.findOne({ email: dto.email });
            if (user) {
                return Error("User existing");
            }

            // if domain exist -> get company
            let org: OrganizationEntity;
            if (dto.domain) {
                org = await this.organizationRepository.findOne({ where: { domain: dto.domain } });

                if (!org) {
                    return Error("org not found");
                }
            }
            // if create a new company
            else {
                org = new OrganizationEntity();
                org.name = dto.company_name;
                // xóa ký tự đặc biệt => ''
                org.domain = dto.company_name.replace(/[.*+?^${}()|[\]\\]/g, '').toLowerCase();
                org = await this.organizationRepository.create(org);
            }

            // ma hoa pass word

            // Creating a unique salt for a particular user 
            const salt = "123456789";

            // Hashing user's salt and password with 1000 iterations, 
            const hashPassword = crypto.pbkdf2Sync(dto.password, salt, 1000, 64, `sha512`).toString(`hex`);
            user = new UserEntity();
            user.fullName = dto.full_name;
            user.email = dto.email;
            user.password = hashPassword;
            user.organizationId = org.id;
            // // console.log(hashPassword);

            // // console.log(user);


            await this.usersRepository.save(user);

            return "Registered successfully";

        } catch (error) {
            // // console.log(error);
            return Error(error)
        }
    }

    async login(dto: LoginReqDto) {


        let user = await this.usersRepository.findOne({ email: dto.email });
        if (!user) {
            return Error("User does not exist");
        }
        // Creating a unique salt for a particular user 
        const salt = "123456789";

        // Hashing user's salt and password with 1000 iterations, 
        const hashPassword = crypto.pbkdf2Sync(dto.password, salt, 1000, 64, `sha512`).toString(`hex`);

        if (user.password !== hashPassword) {
            return Error("Email or password wrong");
        }


        if (user.deleteFlag === 1) {
            return Error("Tài khoản của bạn đã bị xóa xin vui lòng liên hệ admin");
        }

        if (user.deactive === 1) {
            return Error("Tài khoản của bạn đã bị khóa xin vui lòng liên hệ manager");
        }
        //  return token
        const tokenData = {
            id: user.id,
            organization_id: user.organizationId
        };

        // jwt
        const token = jwt.sign({
            data: tokenData
        }, 'secret', { expiresIn: '1h' });


        return {
            access_token: token,
            user_id: user.id,
            organization_id: user.organizationId,
            role: user.role, 
            fullname: user.fullName
        }
    }
}