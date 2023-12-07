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
exports.DostypController = void 0;
const common_1 = require("@nestjs/common");
const dostyp_service_1 = require("./dostyp.service");
const auth_decorator_1 = require("../auth/decorator/auth.decorator");
const dostyp_dto_1 = require("./dostyp.dto");
let DostypController = class DostypController {
    constructor(dostypService) {
        this.dostypService = dostypService;
    }
    async datDostyp(dto) {
        return this.dostypService.datDostyp(dto);
    }
    async ybrDostyp(dto) {
        return this.dostypService.ybratDostyp(dto);
    }
    async proverka(dto) {
        return this.dostypService.proverkaDostypa(dto);
    }
};
exports.DostypController = DostypController;
__decorate([
    (0, common_1.Post)('dat'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dostyp_dto_1.dostypDto]),
    __metadata("design:returntype", Promise)
], DostypController.prototype, "datDostyp", null);
__decorate([
    (0, common_1.Post)('ybr'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dostyp_dto_1.dostypDto]),
    __metadata("design:returntype", Promise)
], DostypController.prototype, "ybrDostyp", null);
__decorate([
    (0, common_1.Post)('proverka'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dostyp_dto_1.dostypDto]),
    __metadata("design:returntype", Promise)
], DostypController.prototype, "proverka", null);
exports.DostypController = DostypController = __decorate([
    (0, common_1.Controller)('dostyp'),
    __metadata("design:paramtypes", [dostyp_service_1.DostypService])
], DostypController);
//# sourceMappingURL=dostyp.controller.js.map