import { WorkerService } from './worker.service';
import { workerDto } from './worker.dto';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    create(dto: workerDto): Promise<number>;
}
