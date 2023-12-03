import { TyrniketService } from './tyrniket.service';
import { tyrniketDto } from './tyrniket.dto';
export declare class TyrniketController {
    private readonly tyrniketService;
    constructor(tyrniketService: TyrniketService);
    add(info: tyrniketDto): Promise<{
        id: number;
        info: string;
    }>;
    all(): Promise<{
        id: number;
        info: string;
    }[]>;
}
