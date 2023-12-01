import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OtmetkaService {
    constructor(private prisma: PrismaService) {}

    async proverka(mesto: number, karta:string) {
        // this.prisma.otmetka.create({data:{karta}})
    }


}
