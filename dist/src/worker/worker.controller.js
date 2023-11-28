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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerController = void 0;
const common_1 = require("@nestjs/common");
const worker_service_1 = require("./worker.service");
const worker_dto_1 = require("./worker.dto");
const platform_express_1 = require("@nestjs/platform-express");
let WorkerController = class WorkerController {
    constructor(workerService) {
        this.workerService = workerService;
    }
    async create(dto, file) {
        return this.workerService.create(dto);
    }
};
exports.WorkerController = WorkerController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('avatarPath')),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [worker_dto_1.workerDto, typeof (_a = typeof  !== "undefined" && ) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], WorkerController.prototype, "create", null);
exports.WorkerController = WorkerController = __decorate([
    (0, common_1.Controller)('worker'),
    __metadata("design:paramtypes", [worker_service_1.WorkerService])
], WorkerController);
//# sourceMappingURL=worker.controller.js.map