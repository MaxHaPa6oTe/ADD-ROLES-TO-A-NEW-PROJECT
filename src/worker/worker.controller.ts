import { Query,UseInterceptors,Controller,UsePipes,ValidationPipe,Body,Post,HttpCode, UploadedFile, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  createWorker (
    @Body() body: workerDto,
    @UploadedFile() file:any
    //   new ParseFilePipe({
    //     validators: [
    //       new FileTypeValidator({ fileType: 'image/jpeg' }),
    //     ]
    //   })
    // )
    // file: Express.Multer.File
    ,
    
  ) {
    return this.workerService.create(body, file)
  }
}