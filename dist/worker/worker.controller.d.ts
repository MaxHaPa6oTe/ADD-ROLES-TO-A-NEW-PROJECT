import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    createWorker(body: workerDto, file: any): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        name: string;
        karta: string;
        phone: string;
        avatarPath: string;
    }>;
    del(id: number): Promise<{
        message: string;
    }>;
    update(body: workerDto, file: any, id: number): Promise<{
        message: string;
    }>;
    obzorRaba(id: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        name: string;
        karta: string;
        phone: string;
        avatarPath: string;
    }>;
}
