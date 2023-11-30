import { Controller } from '@nestjs/common';
import { OtmetkaService } from './otmetka.service';

@Controller('otmetka')
export class OtmetkaController {
  constructor(private readonly otmetkaService: OtmetkaService) {}
}
