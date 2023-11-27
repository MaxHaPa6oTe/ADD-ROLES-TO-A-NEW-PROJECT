import { IsEmail, MinLength, IsString } from "class-validator";

export class regDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Пароль должен содержать не менее 6 символов'
    })
    @IsString()
    password: string

    @IsString()
    name: string
}