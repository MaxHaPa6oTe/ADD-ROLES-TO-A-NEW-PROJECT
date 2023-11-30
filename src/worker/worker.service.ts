import { Injectable,InternalServerErrorException,BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { workerDto } from './worker.dto';
import { FileService } from './file/file.service';

@Injectable()
export class WorkerService {
    constructor(private prisma: PrismaService,
        private fileService: FileService) {}

    async create(body: workerDto, file: any) {
        const uniqPhone = await this.prisma.worker.findFirst({where: {phone: body.phone}})
        if (uniqPhone) {
            throw new BadRequestException('Этот номер уже существует')
        }
        const fileName = await this.fileService.createFile(file);
        const worker = await this.prisma.worker.create({
            data: {
                name: body.name,
                otdel: body.otdel,
                phone: body.phone,
                karta: body.karta,
                avatarPath: fileName
            }
        })
        return worker        
    }

    async del(idRaba:number) {
        const workerPoisk = await this.prisma.worker.findFirst({where: {id: +idRaba}})
        if (workerPoisk) {
            await this.prisma.worker.delete({where: {id:+idRaba}})
        }
        return {
            message: 'Работник удален',
        }
    }

    async update(id:number,body:workerDto,file:any) {
        const workerPoisk = await this.prisma.worker.findFirst({where: {id: +id}})
        if (!workerPoisk) {
            throw new BadRequestException('Не могу найти работника под этим id')
        }
        const {name,otdel,phone,karta} = body
        const fileName = await this.fileService.createFile(file);
        if (fileName) {
            await this.prisma.worker.update({
            where: {
                id:+id
            },
            data: {
                name,
                otdel,
                phone,
                karta,
                avatarPath: fileName
            }
        })
    }
    return {
        message: 'Данные работника изменены'
    }
    }

    async obzorRaba (id:number) {
        const worker = await this.prisma.worker.findFirst({where: {id: +id}})
        if (!worker) {
            throw new BadRequestException('Не могу найти работника под этим id')
        }
        return worker
    }
}