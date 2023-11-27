import { Controller,UsePipes,ValidationPipe,Body,Post,HttpCode } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';


@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post('create')
  async create(@Body() dto: workerDto) {
    return this.workerService.create(dto)
  }
}
