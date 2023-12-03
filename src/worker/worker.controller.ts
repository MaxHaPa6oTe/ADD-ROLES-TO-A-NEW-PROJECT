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
  @UseInterceptors(FileInterceptor('photo'))
  async createWorker(
    @Body() body: workerDto,
    @UploadedFile() photo:any
  ) {
    return this.workerService.create(body, photo)
  }

  @Auth()
  @Delete(':id')
  async del(@Param('id') id: number) {
    return this.workerService.del(id)
  }

  @Put(':id')
  @Auth()
  @UseInterceptors(FileInterceptor('photo'))
  async update(@Body() body:workerDto,
  @UploadedFile() photo:any,
  @Param('id') id:number
  ) {
    return this.workerService.update(id ,body, photo)
  }

  @Get(':id')
  async obzorRaba(@Param('id') id:number) {
    return this.workerService.obzorRaba(id)
  }
}