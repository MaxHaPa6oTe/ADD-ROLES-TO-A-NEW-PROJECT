import { dostypDto } from 'src/dostyp/dostyp.dto';
import { PrismaService } from 'src/prisma.service';
export declare class OtmetkaService {
    private prisma;
    constructor(prisma: PrismaService);
    add(dto: dostypDto): Promise<{
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
}
