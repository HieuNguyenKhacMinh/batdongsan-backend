import { ProjectController } from './project.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
       ProjectController, ],
    providers: [],
})
export class ProjectModule {}
