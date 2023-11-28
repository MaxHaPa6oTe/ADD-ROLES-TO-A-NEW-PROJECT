import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';

@Injectable()
export class WorkerService {
    constructor(private prisma: PrismaService) {}

 
}