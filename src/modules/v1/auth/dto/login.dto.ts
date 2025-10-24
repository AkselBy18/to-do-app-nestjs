import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {

    @ApiProperty({
        example: 'aksel@gmail.com',
        description: 'User email'
    })
    email: string;

    @ApiProperty({
        example: '12345678',
        description: 'Password access for user'
    })
    password: string;
}