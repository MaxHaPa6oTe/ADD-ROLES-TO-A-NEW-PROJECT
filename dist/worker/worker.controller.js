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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerController = void 0;
const common_1 = require("@nestjs/common");
const worker_service_1 = require("./worker.service");
const worker_dto_1 = require("./worker.dto");
const platform_express_1 = require("@nestjs/platform-express");
const http_1 = require("@nestjs/common/decorators/http");
const auth_decorator_1 = require("../auth/decorator/auth.decorator");
let WorkerController = class WorkerController {
    constructor(workerService) {
        this.workerService = workerService;
    }
    async createWorker(body, photo) {
        return this.workerService.create(body, photo);
    }
    async del(id) {
        return this.workerService.del(id);
    }
    async update(body, photo, id) {
        return this.workerService.update(id, body, photo);
    }
    async obzorRaba(id) {
        return this.workerService.obzorRaba(id);
    }
};
exports.WorkerController = WorkerController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [worker_dto_1.workerDto, Object]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "createWorker", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "del", null);
__decorate([
    (0, http_1.Put)(':id'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [worker_dto_1.workerDto, Object, Number]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "update", null);
__decorate([
    (0, http_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "obzorRaba", null);
exports.WorkerController = WorkerController = __decorate([
    (0, common_1.Controller)('worker'),
    __metadata("design:paramtypes", [worker_service_1.WorkerService])
], WorkerController);
//# sourceMappingURL=worker.controller.js.map