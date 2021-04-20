
import { Module } from '@nestjs/common';
import { ProjectTypeController } from './project_type.controller';

@Module({
    imports: [],
    controllers: [
        ProjectTypeController, ],
    providers: [],
})
export class ProjectTypeModule {}
