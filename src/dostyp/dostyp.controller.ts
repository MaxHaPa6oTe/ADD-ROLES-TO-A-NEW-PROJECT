import { Controller, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { DostypService } from './dostyp.service';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { dostypDto } from './dostyp.dto';

@Controller('dostyp')
export class DostypController {
  constructor(private readonly dostypService: DostypService) {}

  @Post('dat')
  @UsePipes(new ValidationPipe())
  @Auth()
  @HttpCode(201)
  async datDostyp(@Body() dto: dostypDto) {
    return this.dostypService.datDostyp(dto)
  }

  @Post('ybr')
  @UsePipes(new ValidationPipe())
  @Auth()
  async ybrDostyp(@Body() dto: dostypDto) {
    return this.dostypService.ybratDostyp(dto)
  }

  @Post('proverka')
  @UsePipes(new ValidationPipe())
  async proverka(@Body() dto: dostypDto) {
    return this.dostypService.proverkaDostypa(dto)
  }
}
