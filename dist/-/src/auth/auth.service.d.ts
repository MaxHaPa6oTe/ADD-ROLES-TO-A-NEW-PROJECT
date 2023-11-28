import { PrismaService } from 'src/prisma.service';
import { regDto } from './dto/reg.dto';
import { logDto } from './dto/log.dto';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(dto: logDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
    register(dto: regDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
    private issueTokens;
    private returnUserFields;
    private validateUser;
}
