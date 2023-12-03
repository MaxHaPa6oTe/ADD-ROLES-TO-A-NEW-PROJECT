import { PrismaService } from 'src/prisma.service';
import { authDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(dto: authDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    register(dto: authDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    private issueTokens;
    private returnUserFields;
    private validateUser;
}
