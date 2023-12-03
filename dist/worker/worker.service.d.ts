import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';
import { FileService } from './file/file.service';
export declare class WorkerService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    create(body: workerDto, photo: any): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        fio: string;
        phone: string;
        karta: string;
        photo: string;
    }>;
    del(idRaba: number): Promise<{
        message: string;
    }>;
    update(id: number, body: workerDto, file: any): Promise<{
        message: string;
    }>;
    obzorRaba(id: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        fio: string;
        phone: string;
        karta: string;
        photo: string;
    }>;
}
