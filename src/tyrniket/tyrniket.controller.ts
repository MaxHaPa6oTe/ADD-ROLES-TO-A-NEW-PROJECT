import { Controller, Body, HttpCode, Post, Get } from '@nestjs/common';
import { TyrniketService } from './tyrniket.service';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { tyrniketDto } from './tyrniket.dto';

@Controller('tyrniket')
export class TyrniketController {
  constructor(private readonly tyrniketService: TyrniketService) {}

  @Auth()
  @Post()
  @HttpCode(201)
  async add(@Body() info: tyrniketDto) {
    return this.tyrniketService.add(info)
  }

  @Get()
  async all() {
    return this.tyrniketService.all()
  }
}
