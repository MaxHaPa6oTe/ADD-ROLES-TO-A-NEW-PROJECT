import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { regDto } from './dto/reg.dto';
import { logDto } from './dto/log.dto'
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt/dist';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,
        private jwt: JwtService) {}

    async login(dto: logDto) {
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
        const user = await this.prisma.user.findUnique({where: {
            id: result.id
        } })
        const tokens = await this.issueTokens(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async register(dto: regDto) {
        const oldUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if (oldUser) {
            throw new BadRequestException('Данная почта уже занята')
        }
        const unName = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        })
        if (unName) {
            throw new BadRequestException('Этот ник уже занят')
        }
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: dto.name,
                password: await hash(dto.password)
            }
        })
        const tokens = await this.issueTokens(user.id)
        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    private async issueTokens(userId: number) {
        const data = {id: userId}
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
            email: user.email,
            name: user.name
        }
    }

    private async validateUser(dto: logDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if (!user) {
            throw new NotFoundException('Пользователь не найден')
        }
        const isValid = await verify(user.password, dto.password)
        if (!isValid) {
            throw new UnauthorizedException('Инвалид пароль')
        }
        return user
    }
}
