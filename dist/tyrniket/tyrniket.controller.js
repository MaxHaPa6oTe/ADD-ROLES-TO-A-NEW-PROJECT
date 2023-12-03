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
exports.TyrniketController = void 0;
const common_1 = require("@nestjs/common");
const tyrniket_service_1 = require("./tyrniket.service");
const auth_decorator_1 = require("../auth/decorator/auth.decorator");
const tyrniket_dto_1 = require("./tyrniket.dto");
let TyrniketController = class TyrniketController {
    constructor(tyrniketService) {
        this.tyrniketService = tyrniketService;
    }
    async add(info) {
        return this.tyrniketService.add(info);
    }
    async all() {
        return this.tyrniketService.all();
    }
};
exports.TyrniketController = TyrniketController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tyrniket_dto_1.tyrniketDto]),
    __metadata("design:returntype", Promise)
], TyrniketController.prototype, "add", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TyrniketController.prototype, "all", null);
exports.TyrniketController = TyrniketController = __decorate([
    (0, common_1.Controller)('tyrniket'),
    __metadata("design:paramtypes", [tyrniket_service_1.TyrniketService])
], TyrniketController);
//# sourceMappingURL=tyrniket.controller.js.map