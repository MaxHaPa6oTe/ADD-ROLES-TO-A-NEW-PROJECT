"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TyrniketModule = void 0;
const common_1 = require("@nestjs/common");
const tyrniket_service_1 = require("./tyrniket.service");
const tyrniket_controller_1 = require("./tyrniket.controller");
const prisma_service_1 = require("../prisma.service");
let TyrniketModule = class TyrniketModule {
};
exports.TyrniketModule = TyrniketModule;
exports.TyrniketModule = TyrniketModule = __decorate([
    (0, common_1.Module)({
        controllers: [tyrniket_controller_1.TyrniketController],
        providers: [tyrniket_service_1.TyrniketService, prisma_service_1.PrismaService],
    })
], TyrniketModule);
//# sourceMappingURL=tyrniket.module.js.map