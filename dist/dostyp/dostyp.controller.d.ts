import { DostypService } from './dostyp.service';
import { dostypDto } from './dostyp.dto';
export declare class DostypController {
    private readonly dostypService;
    constructor(dostypService: DostypService);
    datDostyp(dto: dostypDto): Promise<{
        id: number;
        createdAt: Date;
        workerId: number;
        tyrniketId: number;
    } | {
        message: string;
    }>;
    ybrDostyp(dto: dostypDto): Promise<{
        message: string;
    }>;
    proverka(dto: dostypDto): Promise<boolean>;
}
