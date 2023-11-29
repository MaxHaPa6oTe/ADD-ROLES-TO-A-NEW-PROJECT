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
        const fileName = await this.fileService.createFile(file);
        const worker = await this.prisma.worker.create({
            data: {
                name: body.name,
                otdel: body.otdel,
                phone: body.phone,
                avatarPath: fileName
            }
        });
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