import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';

@Injectable()
export class WorkerService {
    constructor(private prisma: PrismaService) {}

    async create(dto: workerDto) {
        const worker = await this.prisma.worker.create({
            data: {
                otdel: dto.otdel,
                name: dto.name,
                phone: dto.phone,
                avatarPath: dto.avatarPath
            }
        })
        return worker.id
    }

    
}
