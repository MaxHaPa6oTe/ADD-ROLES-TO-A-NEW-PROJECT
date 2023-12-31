"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DostypService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DostypService = class DostypService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async datDostyp(dto) {
        const provekra = await this.prisma.dostyp.findFirst({
            where: { tyrniketId: dto.tyrniket, workerId: dto.worker }
        });
        if (provekra) {
            return {
                message: 'Доступ выдан'
            };
        }
        const dostyp = await this.prisma.dostyp.create({
            data: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            }
        });
        return dostyp;
    }
    async ybratDostyp(dto) {
        const provekra = await this.prisma.dostyp.findFirst({
            where: { tyrniketId: dto.tyrniket, workerId: dto.worker }
        });
        const dostyp = await this.prisma.dostyp.deleteMany({
            where: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            }
        });
        if (!provekra || dostyp) {
            return {
                message: 'У сотрудника больше нет доступа'
            };
        }
    }
    async proverkaDostypa(dto) {
        const worker = await this.prisma.worker.findFirst({
            where: {
                karta: String(dto.worker)
            }
        });
        if (!worker) {
            return false;
        }
        const provekra = await this.prisma.dostyp.findFirst({
            where: { tyrniketId: dto.tyrniket, workerId: +worker.id }
        });
        if (provekra) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.DostypService = DostypService;
exports.DostypService = DostypService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DostypService);
//# sourceMappingURL=dostyp.service.js.map