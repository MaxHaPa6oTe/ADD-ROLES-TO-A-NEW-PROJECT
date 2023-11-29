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
        phone: string;
        avatarPath: string;
    }>;
}
