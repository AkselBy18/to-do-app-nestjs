import { ApiParam, ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty({
        example: 'Aksel Herrera',
        description: 'Full user name'
    })
    name: string;

    @ApiProperty({
        example: 'aksel@gmail.com',
        description: 'Email for user'
    })
    email: string;

    @ApiProperty({
        example: '12345678',
        description: 'Password access for user'
    })
    password: string;
}