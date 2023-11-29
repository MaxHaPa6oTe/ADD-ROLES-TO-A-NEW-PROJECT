import { Injectable,InternalServerErrorException,BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';
import { FileService } from './file/file.service';

@Injectable()
export class WorkerService {
    constructor(private prisma: PrismaService,
        private fileService: FileService) {}

    async create(body: workerDto, file: any) {
        const uniqPhone = await this.prisma.worker.findUnique({where: {phone: body.phone}})
        if (uniqPhone) {
            throw new BadRequestException('Этот номер уже существует')
        }
        const fileName = await this.fileService.createFile(file);
        const worker = await this.prisma.worker.create({
            data: {
                name: body.name,
                otdel: body.otdel,
                phone: body.phone,
                avatarPath: fileName
            }
        })
        return worker        
    }
}