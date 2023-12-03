import { PrismaService } from 'src/prisma.service';
import { tyrniketDto } from './tyrniket.dto';
export declare class TyrniketService {
    private prisma;
    constructor(prisma: PrismaService);
    add(dto: tyrniketDto): Promise<{
        id: number;
        info: string;
    }>;
    all(): Promise<{
        id: number;
        info: string;
    }[]>;
}
