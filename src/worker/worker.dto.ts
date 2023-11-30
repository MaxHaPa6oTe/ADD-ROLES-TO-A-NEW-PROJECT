import { MinLength, IsString, MaxLength, IsNumber, isString } from "class-validator";

export class workerDto {
    @IsString()
    otdel: string

    @IsString()
    name: string

    @IsString()
    phone: string

    karta: string
    
    file: any
}