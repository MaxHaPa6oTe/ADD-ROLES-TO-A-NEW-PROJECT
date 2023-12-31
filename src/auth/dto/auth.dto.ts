import { IsEmail, MinLength, IsString, IsNotEmpty, IsEmpty } from "class-validator";

export class authDto {
    @IsString()
    name: string

    @MinLength(6, {
        message: 'Пароль должен содержать не менее 6 символов'
    })
    @IsString()
    password: string
    
    role?: string

}