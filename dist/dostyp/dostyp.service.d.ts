import { PrismaService } from 'src/prisma.service';
import { dostypDto } from './dostyp.dto';
export declare class DostypService {
    private prisma;
    constructor(prisma: PrismaService);
    datDostyp(dto: dostypDto): Promise<{
        id: number;
        createdAt: Date;
        workerId: number;
        tyrniketId: number;
    } | {
        message: string;
    }>;
    ybratDostyp(dto: dostypDto): Promise<{
        message: string;
    }>;
    proverkaDostypa(dto: dostypDto): Promise<boolean>;
}
