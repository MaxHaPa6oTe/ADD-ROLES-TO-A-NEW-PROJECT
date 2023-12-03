import { Injectable, BadRequestException } from '@nestjs/common';
import { dostypDto } from 'src/dostyp/dostyp.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OtmetkaService {
    constructor(private prisma: PrismaService) {}

    async add(dto:dostypDto) {
        try {
        await this.prisma.otmetka.create({
            data: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            }
        })
        return {
            message: 'Отметка добавлена'
        }
    } catch (e) {
        throw new BadRequestException('Отметка не добавилась, что-то пошло не так')
    }
    }

    async all(dto:dostypDto) {
        const otmetki = await this.prisma.otmetka.findMany({
            where: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            },
            include: {
                tyrniket: {select: {
                    info: true
                }},
                worker: {select: {
                    fio: true
                }}
            },
        })
        return otmetki
    }
}
