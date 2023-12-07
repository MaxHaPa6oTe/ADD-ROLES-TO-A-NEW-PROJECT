import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { authDto } from './dto/auth.dto'
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt/dist';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,
        private jwt: JwtService) { }

    async login(dto: authDto) {
        const user = await this.validateUser(dto)
        const tokens = await this.issueTokens(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async getNewTokens(refreshToken: string) {
        const result = await this.jwt.verifyAsync(refreshToken)
        if (!result) {
            throw new UnauthorizedException('Инвалид токен')
        }
        const user = await this.prisma.user.findUnique({
            where: {
                id: result.id
            }
        })
        const tokens = await this.issueTokens(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async register(dto: authDto) {
        const unName = await this.prisma.user.findUnique({
            where: {
                name: dto.name,
            }
        })
        if (unName) {
            throw new BadRequestException('Этот ник уже занят')
        }
        let user
        if (dto.role === 'piska') {
            user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    password: await hash(dto.password),
                    role: 'ADMIN'
                }
            })
        } else {
            user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    password: await hash(dto.password),
                    
                }
            })
        }
        const tokens = await this.issueTokens(user.id)
        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    private async issueTokens(userId: number) {
        const data = { id: userId }
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        })
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d',
        })
        return { accessToken, refreshToken }
    }

    private returnUserFields(user: User) {
        return {
            id: user.id,
            name: user.name,
            role: user.role
        }
    }

    private async validateUser(dto: authDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        })
        if (!user) {
            throw new NotFoundException('Неверный логин или пароль')
        }
        const isValid = await verify(user.password, dto.password)
        if (!isValid) {
            throw new UnauthorizedException('Неверный логин или пароль')
        }
        return user
    }
}
