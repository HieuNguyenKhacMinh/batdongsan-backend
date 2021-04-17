
import { Module } from '@nestjs/common';
import { OpportunityController } from './lead.controller';

@Module({
    imports: [],
    controllers: [
       OpportunityController, ],
    providers: [],
})
export class OpportunityModule {}
