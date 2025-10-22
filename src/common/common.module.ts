import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptoService } from './services/crypto/crypto.service';
import { JwtService } from './services/jwt/jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ConfigModule,
        JwtModule.register({})
    ],
    providers: [
        CryptoService,
        JwtService,
    ],
    exports: [
        CryptoService,
        JwtService
    ]
})
export class CommonModule {}
