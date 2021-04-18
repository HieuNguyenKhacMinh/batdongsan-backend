import { LeadController } from './lead.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       LeadController, ],
    providers: [],
})
export class LeadModule {}
