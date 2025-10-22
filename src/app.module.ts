import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/v1/users/users.module';
import { TasksModule } from './modules/v1/tasks/tasks.module';
import { AuthModule } from './modules/v1/auth/auth.module';
import { CryptoService } from './common/services/crypto/crypto.service';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: databaseConfig,
      inject: [ConfigService]
    }),
    UsersModule,
    TasksModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService, CryptoService],
})
export class AppModule {}
