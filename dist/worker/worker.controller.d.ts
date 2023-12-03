import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    createWorker(body: workerDto, photo: any): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        otdel: string;
        fio: string;
        phone: string;
        karta: string;
        photo: string;
    }>;
    del(id: number): Promise<{
        message: string;
    }>;
    update(body: workerDto, photo: any, id: number): Promise<{
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
