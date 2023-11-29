import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';
import { FileService } from './file/file.service';
export declare class WorkerService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    create(body: workerDto, file: any): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        name: string;
        phone: string;
        avatarPath: string;
    }>;
}
