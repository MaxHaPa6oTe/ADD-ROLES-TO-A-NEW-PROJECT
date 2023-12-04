import { StreamableFile } from '@nestjs/common';
import { OtmetkaService } from './otmetka.service';
import { dostypDto } from 'src/dostyp/dostyp.dto';
export declare class OtmetkaController {
    private readonly otmetkaService;
    constructor(otmetkaService: OtmetkaService);
    proverka(dto: dostypDto): Promise<{
        message: string;
    }>;
    all(dto: dostypDto): Promise<({
        worker: {
            fio: string;
        };
        tyrniket: {
            info: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updateAt: Date;
        workerId: number;
        tyrniketId: number;
    })[]>;
    downloadXlsxFile(): Promise<StreamableFile>;
}
