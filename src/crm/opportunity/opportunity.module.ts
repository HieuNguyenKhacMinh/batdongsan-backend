
import { Module } from '@nestjs/common';
import { OpportunityController } from './opportunity.controller';

@Module({
    imports: [],
    controllers: [
       OpportunityController, ],
    providers: [],
})
export class OpportunityModule {}
