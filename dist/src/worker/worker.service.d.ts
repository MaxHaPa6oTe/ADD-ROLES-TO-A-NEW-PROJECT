import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';
export declare class WorkerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: workerDto): Promise<number>;
}
