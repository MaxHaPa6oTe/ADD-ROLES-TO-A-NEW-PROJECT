import { IsEmail, MinLength, IsString } from "class-validator";

export class logDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Пароль должен содержать не менее 6 символов'
    })
    @IsString()
    password: string
}