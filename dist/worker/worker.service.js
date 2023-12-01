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
exports.WorkerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const file_service_1 = require("./file/file.service");
let WorkerService = class WorkerService {
    constructor(prisma, fileService) {
        this.prisma = prisma;
        this.fileService = fileService;
    }
    async create(body, file) {
        const uniqPhone = await this.prisma.worker.findUnique({ where: { phone: body.phone } });
        if (uniqPhone) {
            throw new common_1.BadRequestException('Этот номер уже существует');
        }
        const uniqKarta = await this.prisma.worker.findUnique({ where: { karta: body.karta } });
        if (uniqKarta) {
            throw new common_1.BadRequestException('Нельзя записывать на одну карту несколько человек');
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
        });
        return worker;
    }
    async del(idRaba) {
        const workerPoisk = await this.prisma.worker.findUnique({ where: { id: +idRaba } });
        if (workerPoisk) {
            await this.prisma.worker.delete({ where: { id: +idRaba } });
        }
        return {
            message: 'Работник удален',
        };
    }
    async update(id, body, file) {
        const workerPoisk = await this.prisma.worker.findUnique({ where: { id: +id } });
        if (!workerPoisk) {
            throw new common_1.BadRequestException('Не могу найти работника под этим id');
        }
        const uniqPhone = await this.prisma.worker.findFirst({ where: { phone: body.phone, id: { not: +id } } });
        if (uniqPhone) {
            throw new common_1.BadRequestException('Этот номер уже существует');
        }
        const uniqKarta = await this.prisma.worker.findFirst({ where: { karta: body.karta, id: { not: +id } } });
        if (uniqKarta) {
            throw new common_1.BadRequestException('Нельзя записывать на одну карту несколько человек');
        }
        const { name, otdel, phone, karta } = body;
        const fileName = await this.fileService.createFile(file);
        if (fileName) {
            await this.prisma.worker.update({
                where: {
                    id: +id
                },
                data: {
                    name,
                    otdel,
                    phone,
                    karta,
                    avatarPath: fileName
                }
            });
        }
        return {
            message: 'Данные работника изменены'
        };
    }
    async obzorRaba(id) {
        const worker = await this.prisma.worker.findFirst({ where: { id: +id } });
        if (!worker) {
            throw new common_1.BadRequestException('Не могу найти работника под этим id');
        }
        return worker;
    }
};
exports.WorkerService = WorkerService;
exports.WorkerService = WorkerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_service_1.FileService])
], WorkerService);
//# sourceMappingURL=worker.service.js.map