import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags("root")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post("upload")
  @UseInterceptors(FileInterceptor("photo", { dest: "./uploads" }))
  uploadSingle(@UploadedFile() file) {
    console.log(file);
  }

  @Post("uploads")
  @UseInterceptors(FilesInterceptor("photos[]", 10, { dest: "./uploads" }))
  uploadMultiple(@UploadedFiles() files) {
    console.log(files);
  }
}
