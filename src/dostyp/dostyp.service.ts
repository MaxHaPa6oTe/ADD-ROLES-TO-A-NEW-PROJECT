import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { dostypDto } from './dostyp.dto';

@Injectable()
export class DostypService {
    constructor(private prisma:PrismaService) {}

    async datDostyp(dto:dostypDto) {
        const provekra = await this.prisma.dostyp.findFirst({
            where: {tyrniketId: dto.tyrniket, workerId: dto.worker}
        })
        if (provekra) {
            return {
                message: 'Доступ выдан'
            }
        }
        const dostyp = await this.prisma.dostyp.create({
            data: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            }
        })
        return dostyp
    }

    async ybratDostyp(dto:dostypDto) {
        const provekra = await this.prisma.dostyp.findFirst({
            where: {tyrniketId: dto.tyrniket, workerId: dto.worker}
        })
        const dostyp = await this.prisma.dostyp.deleteMany({
            where: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            }
        })
        if (!provekra || dostyp) {
        return {
            message: 'У сотрудника больше нет доступа'
        }}
    }

    async proverkaDostypa(dto:dostypDto) {
        const worker = await this.prisma.worker.findFirst({
            where: {
                karta: String(dto.worker)
            }
        })
        if (!worker) {
            return false
        }
        const provekra = await this.prisma.dostyp.findFirst({
            where: {tyrniketId: dto.tyrniket, workerId: +worker.id}
        })
        if (provekra) {
            return true
        } else {
            return false
        }
    }
}
