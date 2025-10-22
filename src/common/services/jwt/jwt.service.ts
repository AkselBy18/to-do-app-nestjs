import { Injectable } from '@nestjs/common';
import { JwtService as Jwt } from '@nestjs/jwt';
import { LoginDto } from 'src/modules/v1/auth/dto/login.dto';

@Injectable()
export class JwtService {
    private readonly SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

    constructor(
        private readonly jwt: Jwt
    ) { }


    async sing(data: LoginDto): Promise<string> {
        console.log('current secret key', this.SECRET_KEY)
        return this.jwt.signAsync(data, { privateKey: this.SECRET_KEY, expiresIn: '24h' })
    }

    async verify(token: string): Promise<LoginDto> {
        return this.jwt.verifyAsync(token, { publicKey: this.SECRET_KEY });
    }
}
