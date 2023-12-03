import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { OtmetkaService } from './otmetka.service';
import { dostypDto } from 'src/dostyp/dostyp.dto';

@Controller('otmetka')
export class OtmetkaController {
  constructor(private readonly otmetkaService: OtmetkaService) {}

  @Post('add')
  @UsePipes(new ValidationPipe())
  async proverka(@Body() dto: dostypDto) {
    return this.otmetkaService.add(dto)
  }

  @Post('all')
  @UsePipes(new ValidationPipe())
  async all(@Body() dto: dostypDto) {
    return this.otmetkaService.all(dto)
  }
}
