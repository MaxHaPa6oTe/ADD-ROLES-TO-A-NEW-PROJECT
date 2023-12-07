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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const argon2_1 = require("argon2");
const dist_1 = require("@nestjs/jwt/dist");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async getNewTokens(refreshToken) {
        const result = await this.jwt.verifyAsync(refreshToken);
        if (!result) {
            throw new common_1.UnauthorizedException('Инвалид токен');
        }
        const user = await this.prisma.user.findUnique({
            where: {
                id: result.id
            }
        });
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async register(dto) {
        const unName = await this.prisma.user.findUnique({
            where: {
                name: dto.name,
            }
        });
        if (unName) {
            throw new common_1.BadRequestException('Этот ник уже занят');
        }
        let user;
        if (dto.role === 'piska') {
            user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    password: await (0, argon2_1.hash)(dto.password),
                    role: 'ADMIN'
                }
            });
        }
        else {
            user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    password: await (0, argon2_1.hash)(dto.password),
                }
            });
        }
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async issueTokens(userId) {
        const data = { id: userId };
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        });
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    returnUserFields(user) {
        return {
            id: user.id,
            name: user.name,
            role: user.role
        };
    }
    async validateUser(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('Неверный логин или пароль');
        }
        const isValid = await (0, argon2_1.verify)(user.password, dto.password);
        if (!isValid) {
            throw new common_1.UnauthorizedException('Неверный логин или пароль');
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        dist_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map