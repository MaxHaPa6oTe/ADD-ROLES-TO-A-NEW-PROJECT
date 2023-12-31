import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BadRequestException } from '@nestjs/common'
import { tyrniketDto } from './tyrniket.dto';

@Injectable()
export class TyrniketService {
    constructor(private prisma: PrismaService) {}

    async add(dto:tyrniketDto) {
        const poisk = await this.prisma.tyrniket.findUnique({where: {info:dto.info}})
        if (poisk) {
            throw new BadRequestException('Турникет уже есть в базе')
        }
        const tyrniket = this.prisma.tyrniket.create({
            data: {
                info:dto.info
            }
        })
        return tyrniket
    }

    async all() {
        return await this.prisma.tyrniket.findMany()
    }
}
