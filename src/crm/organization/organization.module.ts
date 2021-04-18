import { OrganizationController } from './organization.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       OrganizationController, ],
    providers: [],
})
export class OrganizationModule {}
