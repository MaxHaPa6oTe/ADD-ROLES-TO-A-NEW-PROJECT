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
exports.TyrniketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const common_2 = require("@nestjs/common");
let TyrniketService = class TyrniketService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(dto) {
        const poisk = await this.prisma.tyrniket.findUnique({ where: { info: dto.info } });
        if (poisk) {
            throw new common_2.BadRequestException('Турникет уже есть в базе');
        }
        const tyrniket = this.prisma.tyrniket.create({
            data: {
                info: dto.info
            }
        });
        return tyrniket;
    }
    async all() {
        return await this.prisma.tyrniket.findMany();
    }
};
exports.TyrniketService = TyrniketService;
exports.TyrniketService = TyrniketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TyrniketService);
//# sourceMappingURL=tyrniket.service.js.map