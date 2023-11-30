import { Query,UseInterceptors,Controller,UsePipes,ValidationPipe,Body,Post,HttpCode, UploadedFile, ParseFilePipe, FileTypeValidator, Delete, Param } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Get, Put } from '@nestjs/common/decorators/http';
import { Auth } from 'src/auth/decorator/auth.decorator';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async createWorker(
    @Body() body: workerDto,
    @UploadedFile() file:any
  ) {
    return this.workerService.create(body, file)
  }

  @Auth()
  @Delete(':id')
  async del(@Param('id') id: number) {
    return this.workerService.del(id)
  }

  @Put(':id')
  @Auth()
  @UseInterceptors(FileInterceptor('file'))
  async update(@Body() body:workerDto,
  @UploadedFile() file:any,
  @Param('id') id:number
  ) {
    return this.workerService.update(id ,body, file)
  }

  @Get(':id')
  async obzorRaba(@Param('id') id:number) {
    return this.workerService.obzorRaba(id)
  }
}