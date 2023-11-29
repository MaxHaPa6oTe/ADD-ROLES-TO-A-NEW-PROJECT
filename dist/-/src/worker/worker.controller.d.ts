/// <reference types="multer" />
import { WorkerService } from './worker.service';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    create(file: Express.Multer.File): string;
}
