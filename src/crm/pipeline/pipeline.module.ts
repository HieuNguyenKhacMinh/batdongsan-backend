import { PipelineController } from './pipeline.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       PipelineController, ],
    providers: [],
})
export class PipelineModule {}
