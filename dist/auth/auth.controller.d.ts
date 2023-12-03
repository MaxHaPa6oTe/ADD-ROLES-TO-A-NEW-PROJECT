import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: authDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    getNewTokens(dto: RefreshTokenDto): Promise<{
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
}
