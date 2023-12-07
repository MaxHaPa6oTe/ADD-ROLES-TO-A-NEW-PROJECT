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
exports.OtmetkaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const xlsx_1 = require("xlsx");
let OtmetkaService = class OtmetkaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(dto) {
        try {
            const worker = await this.prisma.worker.findUnique({
                where: {
                    karta: String(dto.worker)
                }
            });
            await this.prisma.otmetka.create({
                data: {
                    tyrniketId: dto.tyrniket,
                    workerId: worker.id
                }
            });
            return {
                message: 'Отметка добавлена'
            };
        }
        catch (e) {
            throw new common_1.BadRequestException('Отметка не добавилась, что-то пошло не так');
        }
    }
    async all(dto) {
        const otmetki = await this.prisma.otmetka.findMany({
            where: {
                tyrniketId: dto.tyrniket,
                workerId: dto.worker
            },
            include: {
                tyrniket: { select: {
                        info: true
                    } },
                worker: { select: {
                        fio: true
                    } }
            },
        });
        return otmetki;
    }
    async download() {
        const otmetki = await this.prisma.otmetka.findMany({
            where: {
                tyrniketId: 9,
                workerId: 1
            },
            include: {
                tyrniket: { select: {
                        info: true
                    } },
                worker: { select: {
                        fio: true
                    } }
            },
        });
        let arr = [];
        otmetki.map(info => {
            let arr1 = [];
            let date = info.createdAt.toString();
            arr1.push(info.tyrniket.info);
            arr1.push(date.substring(4, date.length - 37));
            arr1.push(info.worker.fio);
            arr.push(arr1);
        });
        const ws = xlsx_1.utils.aoa_to_sheet(arr);
        const wb = xlsx_1.utils.book_new();
        xlsx_1.utils.book_append_sheet(wb, ws, "Data");
        const buf = (0, xlsx_1.write)(wb, { type: "buffer", bookType: "xlsx" });
        return new common_1.StreamableFile(buf);
    }
};
exports.OtmetkaService = OtmetkaService;
exports.OtmetkaService = OtmetkaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OtmetkaService);
//# sourceMappingURL=otmetka.service.js.map