import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Header, StreamableFile } from '@nestjs/common';
import { OtmetkaService } from './otmetka.service';
import { dostypDto } from 'src/dostyp/dostyp.dto';
import { utils, write } from 'xlsx';


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

  @Get('download')
  @Header('Content-Disposition', 'attachment; filename="SheetJSNest.xlsx"')
  async downloadXlsxFile(): Promise<StreamableFile> {
    // const ws = utils.aoa_to_sheet([['Турникет ФИО'], [1, 2], [3, 4]]);
    // const wb = utils.book_new(); utils.book_append_sheet(wb, ws, "Data");
    // const buf = write(wb, {type: "buffer", bookType: "xlsx"});
    // return new StreamableFile(buf);
    return this.otmetkaService.download()
}
}