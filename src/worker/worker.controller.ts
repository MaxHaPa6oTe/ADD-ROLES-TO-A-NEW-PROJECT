import { Query,UseInterceptors,Controller,UsePipes,ValidationPipe,Body,Post,HttpCode, UploadedFile } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  // @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './files',
      filename: (req,file,callback) => {
      const uniqueSuffix =
        Date.now() + '-' + Math.round(Math.random()*1e9)
        const ext = path.extname(file.originalname);
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
        callback(null,filename)
      }
    })
  }))
  @Post('/file')
  create(@UploadedFile() file:Express.Multer.File) {
    console.log('file', file)
    return 'file upload api'
  }
}
